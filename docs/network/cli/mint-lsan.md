---
title: 'Minting LSAN Tokens with CLI'
sidebar_position: 2
---

To get started with LogStore, you will need an amount of LSAN. One way of having it is minting new LSAN tokens from MATIC. We’ve facilitated this by including this command in our CLI:

The **`mint`** command is used to mint LSAN tokens for the Log Store Network.

Here is the usage and structure of the **`mint`** command:

```
mint lsan <amount> [-u, --usd]
```

This command requires an argument **`<amount>`**, the amount in MATIC Wei to convert into new LSAN tokens.

The optional **`-u, --usd`** flag can be passed in if you want to specify the amount in USD. The command will automatically convert this to the appropriate amount of token to stake.

The successful execution of the command will output a message indicating the transaction hash and the amount minted.

Once you have minted LSAN tokens, you can use them to stake and interact with the Log Store Network.
