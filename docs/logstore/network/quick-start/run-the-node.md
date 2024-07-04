---
title: 'Run the Node'
sidebar_position: 4
slug: '/logstore/node'
---

# Log Store Node Overview

The Log Store Node is a versatile node-to-network infrastructure designed to integrate seamlessly with centralized systems or to be embedded in browser and server applications. It excels in high-frequency, verifiable data collection and distribution.

While utilization of our SDK and APIs embeds Log Store's capabilities directly into your applications, a pivotal element of this technology is the operation of a packaged Node.

Operational Modes of the Log Store Node:

- **Network Mode**: This mode is an exclusive, whitelisted feature allowing participation and facilitation in the broader Log Store Network.
- **Standalone Mode**: Tailored for centralized systems, this mode facilitates a direct interface with the Log Store Network for efficient data collection, proof generation, sharing, and verification.

## Understanding Standalone Mode

Standalone Mode is designed to capture and index verifiable data streams:

- **Independence**: Operate the node autonomously, with no need for LSAN token staking, and therefore no need for network data management.
- **Configurable Streams**: Customize and choose specific data streams for monitoring and querying to meet unique requirements.
- **Self-contained Storage**: Employ your preferred database solutions for storing data.
- **Data Analysis**: Hydrate your Node with data from the network, and then analyse your local data store.
- **Data Verifiability**: Remain confident that all data collected over streams, or hydrated from the Log Store Network is verified.

For a step-by-step guide on setup and usage, please refer to our [Node Quick Start Guide](../../node/quick-start/install.md).

## Streamr Integration

The Log Store Node functions as a Streamr Broker Node Plugin. This integration means that all functionalities enabling a Streamr Broker Node to connect with Streamr data streams are compatible. This includes configurations for additional features like **HTTP**, **WebSocket** or **MQTT** interfaces for efficient data publishing.

To learn more about these interfaces, please refer to the [Streamr Documentation](https://docs.streamr.network/usage/connect-apps-and-iot/streamr-node-interface).
