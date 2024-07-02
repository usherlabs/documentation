---
title: Modes Overview
sidebar_position: 1
---

# Modes Overview

The Log Store Node, central to the Log Store Network, operates in two distinct modes, each catering to different data management needs while ensuring data integrity and authenticity.

### Common Features Across Modes

- **Verifiability**: Both modes uphold data integrity through cryptographic signing.
- **Integration with Log Store Tools**: Seamlessly compatible with Log Store tools like the API and SDK.

### Unique Aspects of Each Mode

1. **Network Mode**:
	- **Role**: Functions as a part of the decentralized Log Store Network.
	- **LSAN Token Utilization**: Necessary for compensating network operations, aligning with the decentralized nature of the mode.
	- **Ideal Use Case**: It’s the engine of our Network. It helps us serve applications that require decentralized, trustless, and verifiable data transactions. You don’t need to run a node to use the network.
2. **Standalone Mode**:
	- **Autonomous Operation**: Operates independently, allowing for tailored data stream configuration.
	- **No LSAN Token Requirement**: There is no need to stake LSAN, as the node itself covers the operation costs.
	- **Targeted Application**: Suited for scenarios that need controlled, verifiable data management in an isolated storage environment.

## Data Storage and Management

Both modes enable querying Streamr streams and running predefined compute programs that validate data as it streams into the system, maintaining data integrity and authenticity. We will release documentation soon to help you configure and use predefined validation processes. If you need early access, please contact us on our [Discord channel](https://go.usher.so/discord).
