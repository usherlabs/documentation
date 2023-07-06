---
title: 'Minting LSAN Tokens'
sidebar_position: 4
---

Once you've [checked your Balance]('./balance.md'), you are ready to interact with the LogStore.
To do so, you will need LSAN tokens.
The CLI enables you to mint new LSAN tokens by depositing MATIC.

Here is the usage and structure of the **`mint`** command:

```
Mint LSAN tokens for the Log Store Network

Arguments:
  amount       Amount of MATIC (default) or USD (in MATIC) or Bytes (in MATIC) to exchange for LSAN.

Options:
  -u, --usd    Pass in an amount in USD which will automatically convert to the appropriate amount of token to mint.
  -b, --bytes  Pass in an amount of bytes that you would like to store. This will automatically convert to the appropriate amount of token to mint.
  -h, --help   display help for command
```

This command requires an argument **`<amount>`**.
By default, this amount is MATIC in Wei which is converted into new LSAN tokens.

The optional **`-u, --usd`** flag can be passed in if you want to specify the amount to stake in USD.
The optional **`-b, --bytes`** flag can be passed in if you want to specify the amount to stake in the number of Bytes you would to store.
Both optional flags will instruct the CLI to automatically convert the amount from USD or Bytes to its appropriate amount of LSAN token to stake.

The successful execution of the command will output a message indicating the transaction hash and the amount minted.

Once you have minted LSAN tokens, you can use them to stake and interact with the Log Store Network.
