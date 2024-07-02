// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const {
	github: lightCodeTheme,
	dracula: darkCodeTheme,
} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Usher Labs Docs',
	tagline:
		'Secure Web3 with trusted data: Usher Labs is an R&D firm enhancing user trust in data and digital asset management.',
	favicon: 'img/favicon.ico',

	url: 'https://docs.usher.so',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

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
		'@docusaurus/plugin-content-pages',
		'@docusaurus/plugin-debug',
		'@docusaurus/plugin-sitemap',
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'logstore',
				path: 'docs/logstore',
				routeBasePath: '/logstore',
				sidebarPath: require.resolve('./sidebars.js'),
				// Please change this to your repo.
				// Remove this to remove the "edit this page" links.
				editUrl:
					// INITIAL TODO change this to your repo. This is where a user will be redirected to if they follow the link on "edit this page"
					'https://github.com/usherlabs/docs/tree/master/',
			},
		],
		// [
		// 	'@docusaurus/plugin-content-docs',
		// 	{
		// 		id: 'verity',
		// 		path: 'docs/verity',
		// 		routeBasePath: '/verity',
		// 		sidebarPath: require.resolve('./sidebars.js'),
		// 		// Please change this to your repo.
		// 		// Remove this to remove the "edit this page" links.
		// 		editUrl:
		// 			// INITIAL TODO change this to your repo. This is where a user will be redirected to if they follow the link on "edit this page"
		// 			'https://github.com/usherlabs/docs/tree/master/',
		// 	},
		// ],
		// This plugin enables tailwind
		// async function myPlugin(context, options) {
		async function cssPlugin() {
			return {
				name: 'docusaurus-tailwindcss',
				configurePostCss(postcssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					postcssOptions.plugins.push(require('tailwindcss'));
					postcssOptions.plugins.push(require('autoprefixer'));
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
	// algolia: { // INITIAL TODO to activate algolia search. Fill according to your needs
	//     appId: '',
	//     apiKey: '',
	//     indexName: '',
	//     contextualSearch: true,
	// },

	themes: [
		[
			path.resolve(__dirname, './node_modules/@docusaurus/theme-classic'),
			{
				customCss: [
					require.resolve(
						'./node_modules/modern-normalize/modern-normalize.css',
					),
					require.resolve('./src/styles/custom.scss'),
				],
			},
		],
		// 'docusaurus-theme-redoc',
		// path.resolve(__dirname, './node_modules/@docusaurus/theme-search-algolia'), // INITIAL TODO if needed to activate algolia
	],

	presets: [
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
					primaryColor: '#1890ff',
				},
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				hideOnScroll: true,
				logo: {
					alt: 'Usher Labs Logo',
					src: '/img/usherlabs/Logo-Text.png',
					srcDark: '/img/usherlabs/Logo-Text-White-500.png',
					target: '_self',
					width: '130',
					href: '/',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'papers',
						label: 'Papers',
						position: 'right',
					},
					{
						type: 'dropdown',
						label: 'Log Store',
						position: 'right',
						items: [
							{
								type: 'docSidebar',
								sidebarId: 'network',
								label: 'Network',
							},
							{
								type: 'docSidebar',
								sidebarId: 'node',
								label: 'Node',
							},
							{
								type: 'docSidebar',
								sidebarId: 'papers',
								label: 'Papers',
							},
						],
					},
					{
						type: 'docSidebar',
						sidebarId: 'verity',
						label: 'Verity',
						position: 'right',
					},
					// Right side starts here
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
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
