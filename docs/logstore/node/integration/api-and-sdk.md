---
title: Log Store API & SDK
sidebar_position: 1
---

# Log Store API & SDK

The Log Store Node integrates with the Log Store API and SDK to provide developers with a dynamic interface for data management. Both ways require the Docker instance to expose the port specified in the configuration file.

**API Integration**

- **Direct Querying**: Use the Node's API endpoint to query your Standalone Node directly. Use [our same HTTP API guide](../api/getting-started.md) and replace it with your node API URL.

**SDK Integration**

- **SDK Utilization**: Our SDK allows for a range of interactions, including creating streams, publishing data, and querying specific nodes. Follow [our detailed instructions in the SDK Setup Guide](../../network/sdk/getting-started.md) to set up the endpoint of your target node for specific interactions.
- **Understanding Stream Management**: In both **`standalone`** and **`network`** modes, a Node tracks specific streams and may be configured to run their particular validations. However, creating or publishing data to a stream isn't restricted to one Node. If multiple Nodes track the same stream, they all store its data.
