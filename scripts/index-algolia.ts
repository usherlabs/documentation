/* eslint-disable @typescript-eslint/no-explicit-any */
import algoliasearch from 'algoliasearch';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

// Algolia client setup
const client = algoliasearch('YOUR_APP_ID', 'YOUR_ADMIN_API_KEY');
const index = client.initIndex('YOUR_INDEX_NAME');

// Function to read and parse markdown files
function readMarkdownFile(filePath: string) {
	const fileContent = fs.readFileSync(filePath, 'utf8');
	const { data, content } = matter(fileContent);
	return { ...data, content };
}

// Updated function to read Docusaurus config
function readDocusaurusConfig() {
	const configPath = path.join(__dirname, '..', 'docusaurus.config.js');

	return new Promise<any>((resolve, reject) => {
		import(configPath)
			.then((module) => {
				resolve(module.default);
			})
			.catch(reject);
	});
}

// Function to read sidebar configuration
function readSidebarConfig() {
	const sidebarPath = path.join(__dirname, '..', 'sidebars.ts');

	return new Promise<any>((resolve, reject) => {
		import(sidebarPath)
			.then((module) => {
				resolve(module.default);
			})
			.catch(reject);
	});
}

// Function to walk through the Docusaurus content directory
function walkContentDirectory(dir: string): string[] {
	let results: string[] = [];
	const list = fs.readdirSync(dir);
	list.forEach((file) => {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);
		if (stat && stat.isDirectory()) {
			results = results.concat(walkContentDirectory(filePath));
		} else if (path.extname(file) === '.md' || path.extname(file) === '.mdx') {
			results.push(filePath);
		}
	});
	return results;
}

// Function to extract SEO metadata from Docusaurus config
function extractSEOMetadata(config: any) {
	const seoConfig = config.themeConfig?.seo || {};
	const defaultTitle = config.title || '';
	const defaultDescription = config.tagline || '';

	return {
		siteTitle: defaultTitle,
		siteDescription: defaultDescription,
		siteUrl: config.url || '',
		siteBaseUrl: config.baseUrl || '/',
		defaultImageUrl: seoConfig.image || '',
		twitterUsername: seoConfig.twitterUsername || '',
	};
}

// Function to find sidebar title for a given page
function findSidebarTitle(sidebars: any, pagePath: string): string | null {
	for (const [sidebarName, sidebarItems] of Object.entries(sidebars)) {
		const flattenedItems = flattenSidebarItems(sidebarItems as any[]);
		const matchingItem = flattenedItems.find((item) => item.id === pagePath);
		if (matchingItem) {
			return sidebarName;
		}
	}
	return null;
}

// Helper function to flatten nested sidebar items
function flattenSidebarItems(items: any[]): any[] {
	return items.reduce((acc, item) => {
		if (item.type === 'category') {
			return [...acc, ...flattenSidebarItems(item.items)];
		}
		return [...acc, item];
	}, []);
}

// Main indexing function
async function indexDocusaurusPages() {
	const contentDir = path.join(__dirname, '..', 'docs'); // Adjust this path
	const files = walkContentDirectory(contentDir);
	const docusaurusConfig = await readDocusaurusConfig();
	const sidebarConfig = await readSidebarConfig();
	const seoMetadata = extractSEOMetadata(docusaurusConfig);

	const objects = files.map((file) => {
		const fileData = readMarkdownFile(file);
		const relativePath = path.relative(contentDir, file).replace(/\\/g, '/');
		const pathWithoutExtension = relativePath.replace(/\.mdx?$/, '');
		const sidebarTitle = findSidebarTitle(sidebarConfig, pathWithoutExtension);

		return {
			objectID: relativePath,
			...fileData,
			...seoMetadata,
			url: path.join(seoMetadata.siteBaseUrl, pathWithoutExtension),
			type: 'docs',
			sidebarTitle,
		};
	});

	try {
		const { objectIDs } = await index.saveObjects(objects);
		console.log(`Indexed ${objectIDs.length} documents`);
	} catch (error) {
		console.error('Error indexing documents:', error);
	}
}

// Run the indexing
(async () => {
	await indexDocusaurusPages();
})();
