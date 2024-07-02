---
title: 'Storage Stake'
sidebar_position: 5
---

Before published messages can be stored by the Log Store Network, some [amount of LSAN](https://docs.logstore.usher.so/network/cli/mint-lsan) needs to be staked against a [Streamr Network stream/topic](https://docs.streamr.network/usage/streams/what-are-streams).

## Creating a Stream

The Log Store Network stores data transmitted over streams that are created within the Streamr Network.

While it is advised to review the Streamr Network's documentation on how to create a stream, the Log Store CLI can be used to create streams too.

```shell
logstore create-stream insert_stream_id
```

Streams can also be created directly within [the Streamr Hub UI](https://streamr.network/hub/streams).

The final Stream ID should look like: `0x8d674b63bb0f59feebc08565abcb7fdfe3801817/logstore-demo`

## Using `balance`

1. Start by allocating some amount of your balance to Storage:

   ```shell
   logstore balance --divide 10
   ```

   ```shell
   The LSAN balance for address 0x8D674B63BB0F59fEebc08565AbcB7fdfe3801817 is 155355382759500866.
   You should see 0.155355382759500866 in your Wallet UI.
   86.975668635541632981 MB of Storage are available to be staked on the Log Store Network.
   1.7395133727108326596 GB of Queries are available to be staked on the Log Store Network.

   Dividing your balance by 10 results in: 15535538275950086.6
   This division yields 8.6975668635541632981 MB available for Storage
   This division yields 173.95133727108326596 MB available for Queries
   ```

2. Use the balance in LSAN to stake
   ```bash
   logstore store stake 0x8d674b63bb0f59feebc08565abcb7fdfe3801817/logstore-demo 15535538275950087
   ```
3. Messages published to the stream will now be automatically stored by the Log Store Network!

## Using `--usd`

```bash
logstore store stake 0x8d674b63bb0f59feebc08565abcb7fdfe3801817/logstore-demo --usd 100
```

This will stake 100 USD worth of LSAN tokens to enable the storage of published messages.
