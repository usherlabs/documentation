---
title: 'Install & Start'
sidebar_position: 1
---

Welcome to the Quick Start guide for installing and deploying your Log Store Node.

## Install

Choose to install and operate the Node directly from the source or by using Docker.

### Source

1. **Clone the Log Store Node Repository**: Begin by cloning the [usherlabs/logstore-node repository](https://github.com/usherlabs/logstore-node) to your machine:

```bash
git clone https://github.com/usherlabs/logstore-node.git
```

1. **Navigate to directory**:

```bash
cd logstore-node
```

1. **Build the Node**:

```bash
pnpm i
pnpm build
```

### Docker

**Pull the Docker Image**:

```bash
docker pull ghcr.io/usherlabs/logstore-node:latest
```

## Configuring the Node

1. **Configuration File**: Create a JSON configuration file for your node. Example configurations are available in [the **`config-examples`** directory](https://github.com/usherlabs/logstore-node/tree/master/config-examples). Customize your configuration as needed. For a detailed guide on configuration parameters, refer to the [Configuration Reference](./config) section.
2. **Setup Configuration**: Store your configuration file in a location accessible to Docker. This file will be used when initiating your Node.

## Starting the Node

To start your Log Store Node, execute the command below, replacing **`<path-to-your-config>`** with the actual path to your configuration file.

An example config path: `~/.logstore/config/default.json`

**Source:**

```sh
pnpm lsn start --config <path-to-your-config>
```

**Docker:**

```sh
docker run \
  -v <path-to-your-config>:/home/node/.logstore/config/default.json \
  -p 7774:7774 \
  ghcr.io/usherlabs/logstore-node:latest
```

This mounts your configuration file into the Docker container and initiates the Log Store Node.

## Verifying the Installation

**Check Node Status**: Ensure your Log Store Node is active. This can be verified by inspecting the Docker container and/or Node's logs or querying the Node's API.

:::note
The Streamr Network has undergone an [upgrade](https://docs.streamr.network/docs/network/upgrades/2024-05-23-upgrade-to-v2) to v100.x. You may notice websocket related error messages when starting a Log Store Node. This is caused by cycling through connections to various Streamr Nodes. This is a known issue and does not impact the functionality of the Log Store Node or Streamr technology.
:::

Congratulations! Your Log Store Node is now successfully installed and operational. This setup allows you to engage with the Log Store Network effectively. For further information on Node configuration and integration, refer to the subsequent sections.
