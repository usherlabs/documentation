/* eslint-disable @typescript-eslint/no-explicit-any */
import algoliasearch from 'algoliasearch';
import 'dotenv/config';
import fs from 'fs';
import matter from 'gray-matter';
import { JSDOM } from 'jsdom';
import path from 'path';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import { remove } from 'unist-util-remove';

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

// Algolia client setup
const client = algoliasearch(
	process.env.ALGOLIA_APP_ID,
	process.env.ALGOLIA_API_KEY,
);
const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

async function readDocusaurusConfig() {
	const configPath = path.join(process.cwd(), 'docusaurus.config.js');
	const { default: config } = await import(configPath);
	return config;
}

function readMarkdownFile(filePath: string) {
	const fileContent = fs.readFileSync(filePath, 'utf8');
	const { data, content } = matter(fileContent);
	return { ...data, content };
}

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

async function processMarkdown(content: string): Promise<string> {
	const processor = unified().use(remarkParse).use(remarkStringify);
	const tree = processor.parse(content);
	remove(tree, { type: 'code' }); // Remove code blocks
	const processedContent = await processor.run(tree);
	return processor.stringify(processedContent as typeof tree);
}

// async function processMarkdown(content: string): Promise<string> {
//   const result = await remark()
//     .use(strip, {keep: ['heading', 'paragraph']})
//     .process(content);
//   return result.toString();
// }

function extractHeadings(content: string): {
	hierarchy: Record<string, string>;
	content: string;
} {
	const dom = new JSDOM(content);
	const headings = dom.window.document.querySelectorAll(
		'h1, h2, h3, h4, h5, h6',
	);
	const hierarchy: Record<string, string> = {};
	let lastLevel = 0;

	headings.forEach((heading) => {
		const level = parseInt(heading.tagName[1]);
		const text = heading.textContent || '';

		if (level <= lastLevel) {
			for (let i = level; i <= 6; i++) {
				delete hierarchy[`lvl${i}`];
			}
		}

		hierarchy[`lvl${level}`] = text;
		lastLevel = level;
	});

	return { hierarchy, content: dom.window.document.body.textContent || '' };
}

async function indexDocusaurusPages() {
	const config = await readDocusaurusConfig();
	const contentDir = path.join(process.cwd(), 'docs');
	const files = walkContentDirectory(contentDir);

	const objects = await Promise.all(
		files.map(async (file) => {
			const { content, ...frontMatter } = readMarkdownFile(file);
			const processedContent = await processMarkdown(content);
			const { hierarchy, content: extractedContent } =
				extractHeadings(processedContent);
			const relativePath = path.relative(contentDir, file);
			const url = `${config.url}${config.baseUrl}${relativePath.replace(/\.mdx?$/, '')}`;

			return {
				objectID: relativePath,
				url,
				type: 'content',
				hierarchy,
				content: extractedContent,
				...frontMatter,
			};
		}),
	);

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
