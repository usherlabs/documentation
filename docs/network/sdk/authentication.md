---
title: 'Authentication'
sidebar_position: 2
---

# Authentication

## Using a Private Key

```ts
const streamrClient = new StreamrClient({
	auth: {
		privateKey: 'your-private-key',
	},
});
const logStoreClient = new LogStoreClient(steamrClient);
```

Private keys can also be generated using `LogStoreClient.generateEthereumAccount()`.

## Using a Web3 Provider

```ts
const streamrClient = new StreamrClient({
	auth: {
		ethereum: window.ethereum,
	},
});
const logStoreClient = new LogStoreClient(steamrClient);
```

You can also create an anonymous client instance that can interact with public streams:

```ts
const streamrClient = new StreamrClient();
const logStoreClient = new LogStoreClient(streamrClient);
```
