export default process.env.GTAG_ID
	? [
			'@docusaurus/plugin-google-gtag',
			{
				trackingID: process.env.GTAG_ID,
				anonymizeIP: true,
			},
		]
	: undefined;
