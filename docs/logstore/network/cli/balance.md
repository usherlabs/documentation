---
title: 'Check your Balance'
sidebar_position: 3
---

A balance check is fundamental to ensuring your experience with the Log Store is perfect.
It ensures you have enough LSAN to fulfil your storage and query requirements.
It also ensures you have enough LSAN staked to publish events to storage and to submit query requests.

## Wallet Balance

To view your balance of LSAN tokens available in your wallet:

```shell
logstore balance
```

```shell
The LSAN balance for address 0x8D674B63BB0F59fEebc08565AbcB7fdfe3801817 is 155355382759500866.
You should see 0.155355382759500866 in your Wallet UI.
86.975668635541632981 MB of Storage are available to be staked on the Log Store Network.
1.7395133727108326596 GB of Queries are available to be staked on the Log Store Network.
```

To manage the LSAN in your wallet, such that you can partition an amount for storage, and another amount for queries, pass the `--divide` flag.

In the following case, we wish to only stake a quarter of our available funds for storage.

```shell
logstore balance --divide 4
```

```shell
The LSAN balance for address 0x8D674B63BB0F59fEebc08565AbcB7fdfe3801817 is 155355382759500866.
You should see 0.155355382759500866 in your Wallet UI.
86.975668635541632981 MB of Storage are available to be staked on the Log Store Network.
1.7395133727108326596 GB of Queries are available to be staked on the Log Store Network.

Dividing your balance by 4 results in: 38838845689875216.5
This division yields 21.743917158885408245 MB available for Storage
This division yields 434.87834317770816491 MB available for Queries
```

## Storage Balance

To view the balance of your LSAN tokens **staked and ready for storage**:

```shell
logstore store balance
```

```shell
22417804150000125 LSAN staked on-chain for Storage.
12.55060153471019237 MB of data is available for Storage.
```

## Query Balance

To view the balance of your LSAN tokens **staked and ready for queries**:

```shell
logstore query balance
```

```shell
1569246290500009 LSAN staked on-chain for Queries.
17.570842148594272117 MB of data is available for Queries.
```

## On-chain LSAN & LSAN in Wallet

EVM Blockchains like the Polygon Network utilise a standard for Fungible Tokens recognised as the ERC20 standard.

Balances managed on-chain are large integer values, whereas the same balance is recognised in a Wallet UI in a smaller human-readable notion.

The LSAN token has an 18 decimal precision, meaning that the on-chain balance is `10 ^ 18` times the wallet balance.
ie. `on_chain_balance = wallet_balance * 10 ^ 18`.

[This StackOverflow comment](https://ethereum.stackexchange.com/a/134960) does a good job of explaining this further.

The Log Store CLI will keep you aware of your on-chain balance, and it's human-readable variant to improve your experience with the network.
