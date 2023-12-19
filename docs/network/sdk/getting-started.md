---
title: 'Getting Started'
sidebar_position: 1
---

## The Streamr Network

The Log Store Client is an extension of the Streamr Client.

This means that the `LogStoreClient` has the exact same methods and interface as the `StreamrClient` , however dismisses the `resend` function for the `query` function instead.

For reference, please review the StreamrClient documentation to gather a full understanding of all base methods available.

[Read Streamr Docs →](https://docs.streamr.network/usage/streams/creating-streams)

## Installing the SDK

The Log Store Client can be installed using `npm`, `pnpm` or `yarn`.

```bash
npm i @logsn/client
```

Then,

```ts
import LogStoreClient from '@logsn/client';

// --- or ---

const LogStoreClient = require('@logsn/client');
```

## Environment

The Log Store Client can be used in both Node.js and the browser.

### Node.js

NodeJS `16.13.x` is the minimum required version. NodeJS `18.13.x`, NPM `8.x` and later versions are recommended.

### Browser (Website/WebApps)

For usage in the browser include the latest build, e.g. by including a `<script>` tag pointing at a CDN:

```html
<script src="https://unpkg.com/@logsn/client@latest/logstore-client.web.js"></script>
```

## The LogStoreClient Class

```ts
constructor(config?: LogStoreClientConfig)
```

This is the constructor for the `LogStoreClient` class. It takes an optional configuration object, `config` of type `LogStoreClientConfig`, which can be used to configure the client. .

```ts
import { StreamrClientConfig } from 'streamr-client';

export interface LogStoreClientConfig extends StreamrClientConfig {
	contracts?: StreamrClientConfig['contracts'] & {
		logStoreNodeManagerChainAddress?: string;
		logStoreStoreManagerChainAddress?: string;
		logStoreTheGraphUrl?: string;
	};
}
```

## Example

Here's how you can configure it for different purposes:

```ts
import LogStoreClient from '@logsn/client';

// Standard configuration
const client = new LogStoreClient({
    auth: {
        privateKey: 'your-private-key',
    },
    // Other configuration options...
});

// Configuration for Standalone Node
const standaloneClient = new LogStoreClient({
    auth: {
        privateKey: 'your-private-key',
    },
    nodeUrl: 'http://your-standalone-node-url',
});
```

### **Configuring for Standalone Node**

When working with a Standalone Log Store Node, you can direct the Log Store Client to interact specifically with your node using the **`nodeUrl`** configuration parameter. This is particularly useful for querying data from a node that operates independently of the decentralized network.

- **`nodeUrl`**: Specify the API URL of your Standalone Log Store Node. Queries and other interactions will be executed against this specified URL.
