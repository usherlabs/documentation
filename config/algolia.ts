export default !(
	process.env.ALGOLIA_APP_ID &&
	process.env.ALGOLIA_API_KEY &&
	process.env.ALGOLIA_INDEX_NAME
)
	? undefined
	: {
			appId: process.env.ALGOLIA_APP_ID,
			apiKey: process.env.ALGOLIA_API_KEY,
			indexName: process.env.ALGOLIA_INDEX_NAME,
			// Optional: see doc section below
			contextualSearch: true,

			// Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
			// externalUrlRegex: 'external\\.com|domain\\.com',

			// Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
			// replaceSearchResultPathname: {
			// 	from: '/docs/', // or as RegExp: /\/docs\//
			// 	to: '/',
			// },

			// Optional: Algolia search parameters
			// searchParameters: {},

			// Optional: path for search page that enabled by default (`false` to disable it)
			// searchPagePath: 'search',

			// Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
			// insights: false,
		};
