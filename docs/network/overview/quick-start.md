---
title: 'Quick Start'
sidebar_position: 1
slug: '/'
---

#####

The Log Store Network can be thought of as a decentralized, time-indexed database, meaning essentially that it is a database which can be queried by time. There are several key actions that must be taken in order to be able to store data on the network and retrieve data from the network. The actions are:

- Create a stream.
- Get some LSAN tokens.
- Stake some LSAN tokens for storage on stream.
- Stake some LSAN tokens for querying from any stream, your stream included.
- Publish some messages to your stream.
- Query some messages from your stream.

We will elaborate on all the steps listed above in the coming paragraphs.

## **Installing the CLI Tool and JavaScript Client**

In order to perform the key actions listed above, we will need to interact with the Log Store network and Interacting with the Log Store can be done via three major channels :- The CLI tool, the Javascript Client and the solidity smart contracts

**CLI →** More information on installing the CLI can be found [here](https://docs.logstore.usher.so/network/cli/getting-started), but it can be installed by running `npm i -g @logsn/cli` and is used for interacting with the Log Store network via the command line.

**Client/SDK →** More information on installing the JavaScript client/SDK can be found [here](https://docs.logstore.usher.so/network/sdk/getting-started), but it can be installed by running `npm i @logsn/client` and is used for interacting with the Log Store network from a JavaScript program.

**Contracts ->** The contracts are deployed on the polygon network, and the code, address and ABI can be found [here](https://github.com/usherlabs/logstore-mirror/tree/master/packages/contracts), and it can be instantiated for use using ethers.js or [remix](https://remix.ethereum.org/)

## Creating a Stream

Before you can store data on the network or query data from the network, you must first create a stream, and this can be done in three different ways.

1. via the CLI: A stream can be created using the Log Store CLI tool via the following command:

```shell
logstore create-stream ${streamId} --host [https://polygon-rpc.com](https://polygon-rpc.com/) --wallet ${privateKey}
```

2. via the Client

```jsx
import { LogStoreClient, CONFIG_TEST } from '@logsn/client';
import axios from 'axios';

const privateKey = 'privateKey';
const streamId = '0xpublic_key/path/identifier';

async function createStream() {
	// Initialize the LogStore client
	const logStoreClient = new LogStoreClient({
		auth: {
			privateKey,
		},
	});

	const stream = await logStoreClient.getOrCreateStream({
		id: streamId,
	});
	console.log({ stream });
}
await createStream();
```

3. via the Streamr UI: The URL to the UI can be found [here](https://streamr.network/hub/streams/new). Fill in the name of the stream and submit the details.

### **Demo**

**[Here](https://www.loom.com/share/628387eb4480479c801da3785d3468ef?sid=7c22f149-d1ff-40e3-a920-2ebcdb371041)** is a demo video showing how all three methods can be used to create a stream.

## Staking in Log Store

The **LSAN** token is the native token of the network, and this token is staked to facilitate data storage to a stream and to facilitate queries from the network. The easiest way to obtain this token is to reach out to the admins and developers for some test tokens on [discord](https://go.usher.so/discord). Alternatively, some LSAN can be minted by calling the mint function on the token contract and providing an equivalent amount of Matic, which can be converted to LSAN tokens as demonstrated **[here](https://docs.logstore.usher.so/network/cli/mint-lsan)**. These tokens can then be used to perform any staking needed on the network.

## Publishing to a Stream

Before you can publish to an already created stream, you need to stake some LSAN tokens, and this can be done both via the CLI tool and the Client.

### Staking for Storage

Using the following methods, one can stake some LSAN tokens.

**CLI:**
Using the CLI tool installed earlier, we can specify a streamId, a stakeAmount and a private key in order to stake a certain amount of LSAN tokens to the network.

```shell
logstore store stake ${streamId} ${stakeAmount} --host https://polygon-rpc.com/ --wallet ${privateKey}
```

**Client:**

```javascript
import { LogStoreClient, CONFIG_TEST } from "@logsn/client";

const privateKey = "privateKey";
const streamId = "0xpublic_key/path/identifier";
const stakeAmount = 10000;

(function createStore(){
	// Initialize the Log Store client
	const logStoreClient = new LogStoreClient({
	  auth: {
	    privateKey,
	  },
	 });

	// Get the stream
	const stream = await logStoreClient.getStream(streamId);
	console.log({ stream });

	// Stake to the stream
	const stakeAmount = 10;
	const response = await logStoreClient.stakeOrCreateStore(
	   stream.id,
	   stakeAmount
	);

})();
```

**Smart Contracts:**

By calling the `stake` method of the [Store Manager contract](https://github.com/usherlabs/logstore-mirror/blob/master/packages/contracts/src/StoreManager.sol), you can directly stake some LSAN tokens into the smart contract.

```jsx
// StoreManager.sol
function stake(string memory streamId, uint amount)
```

### Publishing to Stream

**Client:**

```javascript
import { LogStoreClient, CONFIG_TEST } from "@logsn/client";

const streamId = "0xpublic_key/path/identifier";
const privateKey = "privateKey";

async function publishMessage() {
  // Initialize the Log Store client
  const logStoreClient = new LogStoreClient({
    auth: {
      privateKey,
    },
  });
  const stream = await logStoreClient.getStream(streamId);
  console.log { stream };

  await logStoreClient.publish(stream.id, {
	foo: 'bar 1',
  });
  console.log("Published successfully: ", message);
}

await publishMessage();
```

## Querying from a Stream

Before you can query from a stream, you need to stake some LSAN tokens to the network, a query stake different from the stake earlier for storage of the data of a particular stream to the network.

### Staking for Querying

Using the following methods, one can stake some LSAN tokens to the network for the purpose of performing a query.

**CLI:**
By specifying a wallet address and an amount to stake we can successfully stake for the purpose of querying from the network. You might notice we do not specify a stream, that is because you can query from any stream after this stake.

```shell
logstore query stake --host https://polygon-rpc.com/ --wallet ${walletAddress} ${amount}
```

**Client:**

```javascript
import { LogStoreClient, CONFIG_TEST } from "@logsn/client";

const streamId = "0xpublic_key/path/identifier";
const stakeAmount = 10000;

(function queryStake(){
	// Initialize the Log Store client
	const logStoreClient = new LogStoreClient({
	  auth: {
	    privateKey,
	  },
	 });

	// Stake to the stream
	const stakeAmount = 10;
	const response = await logStoreClient.queryStake(
	   stakeAmount
	);
})();
```

**Smart Contracts:**

By calling the `stake` method of the [Query Manager contract](https://github.com/usherlabs/logstore-mirror/blob/master/packages/contracts/src/QueryManager.sol), you can directly stake some LSAN tokens into the smart contract.

```jsx
// QueryManager.sol
function stake(uint amount) public
```

### **Querying data from the Stream**

```javascript
import { LogStoreClient, CONFIG_TEST } from "@logsn/client";

const privateKey = "privateKey";
const streamId = "0xpublic_key/path/identifier";

(function queryStream(){
	const stream = await logStoreClient.getStream(streamId);
	// Initialize the Logstore client
	const logStoreClient = new LogStoreClient({
	  auth: {
	    privateKey,
	  },
	 });

	const query = await client.query(
	    stream.id,
	    {
	      // Should see the recently sent messages, along with 3 identical ones from storage
	      last: 6,
	    },
	    (message) => {
      // Do something with the messages as they are received
      console.log(JSON.stringify(message));
    }
  );
})();
```

A more in-depth documentation can be found in the docs [here](https://docs..usher.so/).
