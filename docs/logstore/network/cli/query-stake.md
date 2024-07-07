---
title: 'Query Stake'
sidebar_position: 6
---

Before the Log Store Network can be queried, some [amount of LSAN](https://docs.logstore.usher.so/network/cli/mint-lsan) needs to be staked.

## Using `balance`

1. Start by allocating some amount of your balance to Queries:

   ```shell
   logstore balance --divide 100
   ```

   ```shell
   The LSAN balance for address 0x8D674B63BB0F59fEebc08565AbcB7fdfe3801817 is 155355382759500866.
   You should see 0.155355382759500866 in your Wallet UI.
   86.975668635541632981 MB of Storage are available to be staked on the Log Store Network.
   1.7395133727108326596 GB of Queries are available to be staked on the Log Store Network.

   Dividing your balance by 100 results in: 1553553827595008.66
   This division yields 869.75668635541632981 KB available for Storage
   This division yields 17.395133727108326596 MB available for Queries
   ```

2. Use the balance in LSAN to stake
   ```bash
   logstore query stake 1553553827595009
   ```
3. You are now able to submit query requests to the Log Store Network against any stream!

## Using `--usd`

```bash
logstore query stake --usd 100
```

This will stake 100 USD worth of LSAN tokens to enable query requests.

## Private Streams

Queries will not be able to decrypt private streams without appropriate Streamr stream access permissions.
