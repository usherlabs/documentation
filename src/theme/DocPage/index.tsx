import React from 'react';
import DocPage from '@theme-original/DocPage';
import CustomTitle from '@site/src/components/global/CustomTitle';

export default function DocPageWrapper(props) {
	return (
		<>
			<CustomTitle />
			<DocPage {...props} />
		</>
	);
}
