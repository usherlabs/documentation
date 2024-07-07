---
title: 'Query Data'
sidebar_position: 4
---

# Query Data

## API

### `queryStake`

```ts
async function queryStake(amount: bigint, options = { usd: false });
```

Stakes the specified amount of funds in order to perform queries.

- `amount` is a `bigint` type
- `options` is an object with a single optional property, `usd`, which is a boolean indicating whether the amount is in USD.

### `query`

```ts
async function query(
	streamDefinition: StreamDefinition,
	input: QueryInput,
	onMessage?: MessageListener,
): Promise<LogStoreMessageStream>;
```

Queries a stream for historical data.

- `streamDefinition` is an object containing the stream ID and partition that should be queried.
- `input` is an object that defines the query options. It can be of type `QueryInput` and can have different forms like `QueryLast`, `QueryRange`, `QueryFrom`.
- `onMessage` is an optional callback function for each message retrieved from the stream.

Returns a Promise that resolves to a `LogStoreMessageStream` object, providing an alternative way of iterating through the messages.

## Example

```ts
// Staking some funds for the purpose of making a query
await logStoreClient.queryStake(STAKE_AMOUNT);

const queryResult = await logStoreClient.query(myStreamId, {
	from: {
		timestamp: 1685272949531,
	},
	to: {
		timestamp: 1685272962273,
	},
});
```
