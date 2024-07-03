// Note: type annotations allow type checking and IDEs autocompletion
import { Config } from '@docusaurus/types';
import autoprefixer from 'autoprefixer';
import 'dotenv/config';
import { themes } from 'prism-react-renderer';
import tailwindCss from 'tailwindcss';

import algolia from './config/algolia';
import seoMetadata from './config/seo';

if (algolia) {
	console.log('Using Algolia!');
}

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
	title: 'Usher Labs Docs',
	tagline:
		'Secure Web3 with trusted data: Usher Labs is an R&D firm enhancing user trust in data and digital asset management.',
	favicon: 'img/usherlabs/favicon.ico',

	url: 'https://docs.usher.so',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',
	trailingSlash: false, // Add this to ensure consistent URL format

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'usherlabs',
	deploymentBranch: 'master',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lan g. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	plugins: [
		'docusaurus-plugin-sass',
		'@docusaurus/plugin-sitemap',
		'docusaurus-plugin-image-zoom',
		// This plugin enables tailwind
		// async function myPlugin(context, options) {
		async function cssPlugin() {
			return {
				name: 'docusaurus-tailwindcss',
				configurePostCss(postcssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					postcssOptions.plugins.push(tailwindCss);
					postcssOptions.plugins.push(autoprefixer);
					return postcssOptions;
				},
			};
		},

		// [
		// 	'@docusaurus/plugin-client-redirects',
		// 	{
		// 		redirects: [
		// 			{
		// 				from: ['/network/overview/paper', '/network/overview/papers'],
		// 				to: '/papers',
		// 			},
		// 			{
		// 				from: ['/network/overview/lightpaper'],
		// 				to: '/papers/logstore/lightpaper',
		// 			},
		// 			{
		// 				from: ['/network/overview/use-cases', '/use-cases'],
		// 				to: '/papers/logstore/use-cases',
		// 			},
		// 			{
		// 				from: ['/network/sdk/client-side-network-verification'],
		// 				to: '/network/sdk/network-verification',
		// 			},
		// 		],
		// 	},
		// ],
	],

	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					// id: 'logstore',
					path: 'docs',
					routeBasePath: '/',
					sidebarPath: require.resolve('./config/sidebars.ts'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						// INITIAL TODO change this to your repo. This is where a user will be redirected to if they follow the link on "edit this page"
						'https://github.com/usherlabs/docs/tree/master/',
				},
				blog: false,
				theme: {
					customCss: [
						require.resolve(
							'./node_modules/modern-normalize/modern-normalize.css',
						),
						require.resolve('./src/styles/custom.scss'),
					],
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
				},
			},
		],
		[
			'redocusaurus',
			{
				// Plugin Options for loading OpenAPI files
				specs: [
					{
						spec: './docs/logstore/node/api/_api.spec.yaml',
						route: '/logstore/node/api/reference',
					},
				],
				// Theme Options for modifying how redoc renders them
				theme: {
					// Change with your site colors
					primaryColor: '#100322',
				},
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		{
			metadata: seoMetadata,
			navbar: {
				hideOnScroll: true,
				logo: {
					alt: 'Usher Labs Logo',
					src: '/img/usherlabs/Logo-Text-500.png',
					srcDark: '/img/usherlabs/Logo-Text-White-500.png',
					target: '_self',
					width: '120',
					href: '/',
				},
				items: [
					{
						label: '🏠 Home',
						position: 'left',
						href: '/',
					},
					{
						label: '📄 Papers',
						position: 'left',
						href: '/papers',
					},
					{
						type: 'docSidebar',
						sidebarId: 'verity',
						label: '🧪 Verity',
						position: 'left',
					},
					{
						type: 'dropdown',
						label: '🧶 Log Store',
						position: 'left',
						items: [
							{
								type: 'docSidebar',
								sidebarId: 'network',
								label: 'Log Store Network',
							},
							{
								type: 'docSidebar',
								sidebarId: 'node',
								label: 'Log Store Node',
							},
						],
					},
					{
						type: 'search',
						position: 'right',
					},
					{
						label: 'Stay tuned',
						position: 'right',
						items: [
							{
								href: 'https://logstore.usher.so',
								label: 'Our Homepage',
								target: '_blank',
								rel: null,
							},
							{
								label: 'Follow us',
								href: 'https://twitter.com/usher_web3',
								target: '_blank',
								rel: null,
							},
							{
								label: 'Join our Discord server',
								href: 'https://go.usher.so/discord',
								target: '_blank',
								rel: null,
							},
							{
								label: 'Discover Usher Labs',
								href: 'https://linktr.ee/usher.so',
								target: '_blank',
								rel: null,
							},
						],
					},
					{
						type: 'custom-separator',
						position: 'right',
					},
					{
						type: 'custom-iconLink',
						position: 'right',
						icon: {
							alt: 'github logo',
							src: `/img/github.svg`,
							href: 'https://github.com/usherlabs/logstore',
							target: '_blank',
						},
					},
				],
			},
			prism: {
				theme: themes.github,
				darkTheme: themes.duotoneDark,
			},
			seo: {
				twitterUsername: '@usher_web3',
			},
			zoom: {
				selector: '.markdown .zoom img',
				background: {
					light: 'rgb(255, 255, 255)',
					dark: 'rgb(50, 50, 50)',
				},
				// config: {
				// 	// options you can specify via https://github.com/francoischalifour/medium-zoom#usage
				// },
			},
			algolia,
		},
};

export default config;
