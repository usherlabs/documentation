---
title: 'Client-side Network Verification'
sidebar_position: 6
---

## Introduction to Network Verification in Log Store

Ensuring data integrity across a decentralized network is crucial for decentralized and tamper-proof data management. The Log Store client achieves this through network verification, which upholds trustless interactions. The verification process confirms data consistency and prevents any unauthorized alterations. This is especially important for applications like smart contracts and dApps that rely on tamper-proof data.

Moreover, network verification enables self-auditing and discrepancy resolution, which ensures data consistency across nodes. This is critical for the network's reliability, making it more robust and trustworthy.

## Log Store System Messages Explained

System messages are events broadcasted through a system stream, designed to ensure consistency and verify communication in the Log Store Network. Here are some of the important system messages to query verifiability:

### `QueryRequest`

A broker sends a `QueryRequest` to request data from the network. It’s an initial step that prompts nodes to provide the requested data.

### `QueryResponse`

In response to a `QueryRequest`, nodes dispatch a `QueryResponse` containing the required data. These responses are central to continuously validating the network's data integrity, confirming that the retrieved information matches the stored data for all nodes.

### `QueryPropagate`

`QueryPropagate` messages address any data gaps left by the primary node’s `QueryResponse`, with secondary nodes providing the missing information. This mechanism maintains the ledger's completeness and accuracy, ensuring a reliable record across the network.

The functionality of these system messages underpins the structural and operational integrity of the Log Store Network, supporting its role as a trusted entity in the decentralized landscape.

## Client-Side Verification Process

:::tip
To enable the client-side verification feature during a query, you can set the `verifyNetworkResponses` option to `true`. This option is available in the `query` method within the `LogStoreClient`. For detailed instructions on utilizing this option, please refer to the `query` method documentation in the [**Query Data section**](./query-data.md).
:::

Log Store's client-side verification is an elective feature that ensures the integrity of HTTP response data by comparing it against system messages. This parallel verification to query fulfillment provides an added layer of data validation. The steps are as follows:

1. **Initiation**: Users can initiate verification alongside their `query`, allowing for simultaneous data retrieval and network integrity checks.
2. **Parallel Verification**: As the client fetches data via HTTP, it also listens to the system stream, ensuring the received data is cross-verified.
3. **Message Collection**: Only `QueryResponse` and `QueryPropagate` messages pertinent to the `QueryRequest` are accumulated, assuring a complete and relevant dataset.
4. **Matrix Assembly**: A Storage Matrix is constructed from these messages, serving as the foundation for data verification.
5. **Matrix Scrutiny**: The matrix undergoes a thorough analysis to confirm data consistency and network reliability.
6. **Timed Verification**: The process is time-sensitive, with timeouts triggering error protocols to address any discrepancies.

This verification mechanism is integral to the trust and transparency offered by the Log Store network, allowing users to independently confirm the fidelity of the data they utilize.

## The Storage Matrix: Organizing Data Responses

Within the Log Store client-side verification process, the Storage Matrix is a data structure that maps data events to reporting nodes.

### Structure Details

The Storage Matrix employs a map of sets where each set associates reported events with the respective nodes and hash values. This setup is designed for efficient verification and consistency checks within the network.

### Illustration of a Storage Matrix

Consider the structure of a storage matrix:

```ts
const storageMatrix: StorageMatrix = new Map([
	[
		'eventId1',
		new Set([
			{ nodeAddress: '0x123', eventHash: '0xabc' },
			{ nodeAddress: '0x789', eventHash: '0xabc' },
		]),
	],
	['eventId2', new Set([{ nodeAddress: '0x123', eventHash: '0xdef' }])],
	[
		'eventId3',
		new Set([
			{ nodeAddress: '0x123', eventHash: '0xghi' },
			{ nodeAddress: '0x789', eventHash: '0xghi' },
		]),
	],
]);
```

Here, `eventId1` is confirmed by nodes `0x123` and `0x789`, while `eventId2` and `eventId3` show how the matrix tracks event distribution across nodes.

## Role of the Storage Matrix

- **Centralizes Response Data**: Aggregates node responses for quick cross-reference and validation.
- **Verifies Event Coverage**: Ensures the query captures complete event data and correlates with network responses.
- **Assures Data Consistency**: Facilitates a consistency check across nodes to detect any data discrepancies.

## Verification Tools for User Empowerment

Empowering users with tools for verification serves several critical functions:

- **Independent Verification**: Enables users to personally attest to data integrity, enhancing trust and transparency without the reliance on third-party audits.
- **Developer Trust**: Assures developers of data consistency and security, which is critical for building reliable applications on the Log Store network.
- **Operational Integrity**: Essential tools that validate the functional correctness of network data, supporting the overall health and function of the network.
- **Accessible Transparency**: Offers a user-friendly verification process, promoting an open and accountable network environment for all users.

## Additional Resources

For a more technical deep dive into how network verification is implemented, users and developers can refer to the source code within the LogSore repository. The network verification logic is primarily located in the `/packages/client/src/utils/networkValidation/` directory. This can offer insights into the actual mechanisms and algorithms used to ensure data integrity and trust within the network.
