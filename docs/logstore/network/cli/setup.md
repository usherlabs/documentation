---
title: 'Setup the CLI'
sidebar_position: 2
---

An EVM Private Key is required to fund storage and queries.
The Log Store Smart Contracts are deployed to the Polygon Mainnet.
MATIC is used to mint LSAN tokens which enable you to interact with the Network.

[Learn more about Minting LSAN →](./mint-lsan.md)

---

The CLI accepts both the `-h, --host` and `-w, --wallet` options within each CLI command.

However, a configuration file can be used to **set these values once**.

To create your configuration:

```shell
logstore init -w wallet_private_key -h polygon_rpc_endpoint
```

When executing a command, you can override the configuration file by passing the `-h, --host` and `-w, --wallet` options.
