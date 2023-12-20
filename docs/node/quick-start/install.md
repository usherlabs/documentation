---
title: 'Instalation & Deployment'
sidebar_position: 1
---

# Installation & Deployment

Welcome to the Quick Start guide for installing and deploying your Log Store Node. This section guides you through a straightforward process to set up your node.

## Installation Requirements

Before starting, ensure you have docker installed on your machine.

## Cloning the Repository

1. **Clone the Log Store Node Repository**: Begin by cloning the [usherlabs/logstore-node repository](https://github.com/usherlabs/logstore-node) to your machine:

```bash
git clone https://github.com/usherlabs/logstore-node.git
```

2. **Navigate to the Cloned Repository**: Change your directory to the newly cloned repository:

```bash
cd logstore-node
```


## Building the Docker Image

1. **Build the Docker Image**: Use the Dockerfile in the repository to create your Log Store Node image:

```bash
docker build . -f ./dev-network/Dockerfile -t usherlabs/logsn-node
```

This builds a Docker image named **`usherlabs/logsn-node`**, using the Dockerfile located in the **`dev-network`** directory.


## Configuring Your Node

1. **Configuration File**: Create a JSON configuration file for your node. Example configurations are available in [the **`config-examples`** directory](https://github.com/usherlabs/logstore-node/tree/develop/config-examples). Customize your configuration as needed. For a detailed guide on configuration parameters, refer to the [Configuration Reference](./config) section.
2. **Setup Configuration**: Store your configuration file in a location accessible to Docker. This file will be used when initiating your Node.

## Starting Your Node

1. **Run Your Node**: To start your Log Store Node, execute the command below, replacing **`<path-to-your-config>`** with the actual path to your configuration file:

```sh
docker run \
		-v <path-to-your-config>:/home/node/.logstore/config/default.json \
		-p 7774:7774 \
		-t usherlabs/logsn-node:latest \
		logstore-broker start
```

This mounts your configuration file into the Docker container and initiates the Log Store Node.


## Verifying the Installation

1. **Check Node Status**: Ensure your Log Store Node is active. This can be verified by inspecting the Docker container's logs or querying the Node's API.

Congratulations! Your Log Store Node is now successfully installed and operational. This setup allows you to engage with the Log Store Network effectively. For further information on Node configuration and integration, refer to the subsequent sections.
