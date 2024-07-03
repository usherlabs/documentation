import algoliasearch from 'algoliasearch';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

// Algolia client setup
if (
	!(
		process.env.ALGOLIA_APP_ID &&
		process.env.ALGOLIA_API_KEY &&
		process.env.ALGOLIA_INDEX_NAME
	)
) {
	throw new Error('Please set Algolia Env Variables');
}

const client = algoliasearch(
	process.env.ALGOLIA_APP_ID,
	process.env.ALGOLIA_API_KEY,
);
const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

// Function to read and parse markdown files
function readMarkdownFile(filePath: string) {
	const fileContent = fs.readFileSync(filePath, 'utf8');
	const { data, content } = matter(fileContent);
	return { ...data, content };
}

// Function to read Docusaurus config
function readDocusaurusConfig() {
	const configPath = path.join(__dirname, '..', 'docusaurus.config.js');
	// We're using require here as Docusaurus config is a .js file
	const config = require(configPath);
	return config;
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
function extractSEOMetadata(config: any, relativePath: string) {
	const seoConfig = config.themeConfig?.seo || {};
	const defaultTitle = config.title || '';
	const defaultDescription = config.tagline || '';

	return {
		siteTitle: defaultTitle,
		siteDescription: defaultDescription,
		siteUrl: seoConfig.siteUrl || '',
		siteBaseUrl: config.baseUrl || '/',
		defaultImageUrl: seoConfig.image || '',
		twitterUsername: seoConfig.twitterUsername || '',
	};
}

// Main indexing function
async function indexDocusaurusPages() {
	const contentDir = path.join(__dirname, '..', 'docs'); // Adjust this path
	const files = walkContentDirectory(contentDir);
	const docusaurusConfig = readDocusaurusConfig();
	const seoMetadata = extractSEOMetadata(docusaurusConfig, '');

	const objects = files.map((file) => {
		const fileData = readMarkdownFile(file);
		const relativePath = path.relative(contentDir, file);

		return {
			objectID: relativePath,
			...fileData,
			...seoMetadata,
			url: path.join(
				seoMetadata.siteBaseUrl,
				relativePath.replace(/\.mdx?$/, ''),
			),
			type: 'docs',
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
