import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import docusaurusPlugin from '@docusaurus/eslint-plugin';
import stylelintPlugin from 'stylelint';

export default [
	{
		ignores: ['node_modules/', 'dist/', 'build/'],
	},
	{
		files: ['**/*.{ts,tsx,js,jsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
				project: './tsconfig.json',
			},
		},
		plugins: {
			react: reactPlugin,
			'@typescript-eslint': tsPlugin,
			'plugin:@docusaurus/recommended': docusaurusPlugin,
			prettier: prettierPlugin,
		},
		extends: [
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:prettier/recommended',
			'plugin:@docusaurus/recommended',
			'prettier', // Ensures prettier rules override other formatting rules
		],
		parser: '@typescript-eslint/parser',
		rules: {
			'prettier/prettier': 'error',
			'react/react-in-jsx-scope': 'off', // Not needed with React 17+
			'react/prop-types': 'off', // Since we are using TypeScript
			'import/prefer-default-export': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
			],
		},
		settings: {
			react: {
				version: 'detect', // Automatically detect the React version
			},
		},
	},
];
