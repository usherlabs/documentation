---
title: Configuration Reference
sidebar_position: 2
---

# Configuration Reference

This guide details the configuration parameters for the Log Store Node. The configuration file, located at **`~/.logstore/config/default.json`**, is essential for setting up your Node's operation, defining its mode, client
details, HTTP server setup, and plugins.

## Configuration Properties

| Object.Property                              | Description                                                                                                 | Default Behavior |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------- |
| client                                       | Client authentication method. This wallet will be used for executing subscriptions and publishing messages. | Required         |
| client.auth.privateKey                       | Private key for authentication, in string format.                                                           |                  |
| client.auth.ethereum                         | Ethereum object for Web3 provider-based authentication.                                                     |                  |
| plugins                                      | Defines additional plugin configurations. See below its specific table for it.                              |                  |
| mode                                         | Specific configuration for each mode                                                                        |                  |
| mode.type                                    | Determines the Node's operating mode: standalone or network.                                                | Network          |
| httpServer.port                              | Port number for the HTTP server.                                                                            | 7171             |
| httpServer.sslCertificate.certFileName       | Path to the certificate file for SSL.                                                                       |                  |
| httpServer.sslCertificate.privateKeyFileName | Path to the private key file for SSL.                                                                       |                  |

## Mode-Specific Configuration

The Node's functionality is influenced by its operating mode. The following tables describe specific configurations for
Standalone and Network modes.

### Standalone Mode Configuration

| Object.Property             | Description                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------- |
| mode.type                   | Set to 'standalone' for Standalone Mode.                                           |
| mode.trackedStreams         | Array of objects defining streams to track and the number of partitions they have. |
| mode.topicsStream           | Stream ID for validation results from predefined processes.                        |
| mode.validationErrorsStream | Stream ID for schema validation errors.                                            |

### Network Mode Configuration

| Object.Property        | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| mode.type              | Set to 'network' for integration into the decentralized Log Store Network. |
| mode.pool.id           | ID of the Kyve Pool for polling new bundles.                               |
| mode.pool.url          | URL of the Kyve Pool for polling.                                          |
| mode.pool.pollInterval | Interval for polling the Kyve network for validated bundles.               |

## Configuration Properties for LogStore Plugin

| Object.Property                                 | Description                                                                             | Default Behavior                     |
| ----------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------ |
| plugins.logStore.cassandra.hosts                | Array of hostnames for the Apache Cassandra cluster.                                    |                                      |
| plugins.logStore.cassandra.username             | Username for Apache Cassandra authentication.                                           |                                      |
| plugins.logStore.cassandra.password             | Password for Apache Cassandra authentication.                                           |                                      |
| plugins.logStore.cassandra.keyspace             | Keyspace name in Apache Cassandra.                                                      |                                      |
| plugins.logStore.cassandra.datacenter           | Name of the datacenter in Apache Cassandra.                                             |                                      |
| plugins.logStore.logStoreConfig.refreshInterval | Interval in milliseconds to refresh LogStore config from Core API. Set to 0 to disable. | 600000 (10 minutes)                  |
| plugins.logStore.cluster.clusterAddress         | Address of the LogStore node cluster.                                                   |                                      |
| plugins.logStore.cluster.clusterSize            | Total number of nodes in the LogStore cluster.                                          | 1                                    |
| plugins.logStore.cluster.myIndexInCluster       | Index of the current node within the LogStore cluster.                                  | 0                                    |
| plugins.logStore.programs.chainRpcUrls          | Mapping of ChainId to its corresponding RPC URL for programs usage                      | `{"137": "https://polygon-rpc.com"}` |

## Examples

For more information on usage, **[check out our set of configuration examples](https://github.com/usherlabs/logstore-node/tree/develop/config-examples)** available on the repository.
