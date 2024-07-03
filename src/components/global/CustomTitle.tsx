import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';

export default function CustomTitle() {
	const { siteConfig } = useDocusaurusContext();
	console.log(siteConfig);
	const fullTitle = `Hello world ${siteConfig.title}`;

	return (
		<Head>
			<title>{fullTitle}</title>
		</Head>
	);
}
