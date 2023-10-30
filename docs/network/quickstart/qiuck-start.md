---
title: 'Quick Start'
sidebar_position: 1
---

The logstore network can be thought of as a decentralised time-indexed database, meaning essentially that it is a database which can be queried by time. There are several key actions that must be taken in order to be able to store data to the network and retrieve data from the network.

## **Installing the CLI tool and Javascript Client**

**Cli →** More information on installing the cli can be found [here](https://docs.logstore.usher.so/network/cli/getting-started), but can be installed by running ``npm i -g @logsn/cli``  and it is used for interacting with the logstore network via the command line.

**Client →** More information on installing the javascript client can be found here, but it can be installed by running `npm i @logsn/client`  and is used for interacting with the logstore network from a javascript program.

## Creating a stream

Before you can store data on the network, you must first create a stream which. and this can be done in three different ways.

1) via the CLI :- A stream can be created using the logstore cli tool via the following command

`logstore create-stream ${streamId} --host [https://polygon-rpc.com](https://polygon-rpc.com/) --wallet ${privateKey}`

2) via the Client

```jsx
import { LogStoreClient, CONFIG_TEST } from "@logsn/client";
import axios from "axios";

const privateKey = "privateKey";
const streamId = "public_key/test/tester";
async function createStream() {
  
  // Initialize the logstore client
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

3) via the streamr UI :- The URL to the UI can be found [here](https://streamr.network/hub/streams/new), fill in the name of the stream and submit the detail

### **Demo**

**[Here](https://www.loom.com/share/628387eb4480479c801da3785d3468ef?sid=7c22f149-d1ff-40e3-a920-2ebcdb371041)** is a demo video showing how all three methods can be used to create a stream.

## Staking in Logstore

The **LSAN** token is the native token of the network, and this token is staked to facilitate data storage and data retrieval. The easiest way to obtain this token is to reach out to the admins and developers for some test tokens.
alternatively some LSAN can be minted by calling the mint function on the token contract and providing an equivalent amount of matic which can be converted to LSAN tokens as demonstrated **[here](https://docs.logstore.usher.so/network/cli/mint-lsan)**. These tokens can then be used to facilitate any staking activities

### **Demo**

Coming soon!

## Publishing to a stream

Before you can publish to an already created stream, you need to stake some funds in it. and this can be done both via the CLI tool and the Client.

### Staking for storage

Using the following methods, one can stake some funds to a stream.

**Cli:** 

`logstore store stake ${streamId} ${stakeAmount} --host [https://polygon-rpc.com](https://polygon-rpc.com/) --wallet ${privateKey}`

**Client:**

```
import { LogStoreClient, CONFIG_TEST } from "@logsn/client";

// Initialize the logstore client
const logStoreClient = new LogStoreClient({
  auth: {
    privateKey,
  },
 });

//get the stream
const stream = await logStoreClient.getStream(streamId);
console.log({ stream });

//stake to the stream
const stakeAmount = 10;
const response = await logStoreClient.stakeOrCreateStore(
   stream.id,
   stakeAmount
);
```

**Smart Contracts:**

By calling the `stake` method of the store manager contract, we can directly stake some LSAN tokens into the smart contract.

```jsx
// StoreManager.sol
function stake(string memory streamId, uint amount)
```

### Publishing to Stream

**Client:**

```jsx
import { LogStoreClient, CONFIG_TEST } from "@logsn/client";

async function publishMessage() {
  // Initialize the logstore client
  const logStoreClient = new LogStoreClient({
    auth: {
      privateKey,
    },
  });
  const stream = await logStoreClient.getStream(streamId);
  console.log({ stream });

  const stakeAmount = 10;
  const response = await logStoreClient.stakeOrCreateStore(
    stream.id,
    stakeAmount
  );
  console.log({ response });

  const message = {
    type: "client:publish",
    ts: Date.now(),
  };

  await logStoreClient.publish(stream, message);
  console.log("Sent successfully: ", message);
}

await publishMessage();
```

### **Demo**

Coming soon!

## Querying from a stream

Before we can query for a stream, we need to stake some funds using our wallet in order to authenticate us

### Staking for querying

Using the following methods, one can stake some funds to a stream.

**Cli:** 

`logstore query stake --host [https://polygon-rpc.com](https://polygon-rpc.com/) --wallet ${walletAddress} ${amount}`

**Client:** 

```
import { LogStoreClient, CONFIG_TEST } from "@logsn/client";

// Initialize the logstore client
const logStoreClient = new LogStoreClient({
  auth: {
    privateKey,
  },
 });

//stake to the stream
const stakeAmount = 10;
const response = await logStoreClient.queryStake(
   stakeAmount
);
```

**Smart Contracts:**

By calling the `stake` method of the query manager contract, we can directly stake some LSAN tokens into the smart contract.

```jsx
// QueryManager.sol
function stake(uint amount) public
```

### **Querying the stream**

```jsx
import { LogStoreClient, CONFIG_TEST } from "@logsn/client";

const stream = await logStoreClient.getStream(streamId);
// Initialize the logstore client
const logStoreClient = new LogStoreClient({
  auth: {
    privateKey,
  },
 });

const query = await client.query(
    stream.id,
    {
      // should see the recently send messages, along with 3 identical ones from storage
      last: 6,
    },
    (message) => {
      // Do something with the messages as they are received
      console.log(JSON.stringify(message));
    }
  );
```

### **Demo**

Coming soon!z