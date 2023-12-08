import React, { useState } from 'react';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout';
import BackToTopButton from '@theme/BackToTopButton';
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import type { Props } from '@theme/DocRoot/Layout';

import styles from './styles.module.css';
import Navbar from '@docusaurus/theme-classic/lib/theme/Navbar';

export default function DocRootLayout({ children }: Props): JSX.Element {
	const sidebar = useDocsSidebar();
	const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
	return (
		<div className={styles.docsWrapper}>
			<BackToTopButton />
			<div className={styles.docRoot}>
				{sidebar && (
					<DocRootLayoutSidebar
						sidebar={sidebar.items}
						hiddenSidebarContainer={hiddenSidebarContainer}
						setHiddenSidebarContainer={setHiddenSidebarContainer}
					/>
				)}
				<div>
					{/* CUSTOM CODE - insert navbar here */}
					<Navbar />
					<DocRootLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
						{children}
					</DocRootLayoutMain>
				</div>
			</div>
		</div>
	);
}
