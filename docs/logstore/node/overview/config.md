---
title: Configuration Reference
sidebar_position: 3
---

# Configuration Reference

This guide details the configuration parameters for the Log Store Node. The configuration file is essential for setting up your Node's operation, defining its mode, client
details, HTTP server setup, and plugins.

## Configuration Properties

| Object.Property                                | Description                                                                                                 | Default Behavior |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------- |
| `client`                                       | Client authentication method. This wallet will be used for executing subscriptions and publishing messages. | Required         |
| `client.auth.privateKey`                       | Private key for authentication, in string format.                                                           |                  |
| `client.auth.ethereum`                         | Ethereum object for Web3 provider-based authentication.                                                     |                  |
| `plugins`                                      | Defines additional plugin configurations. See below its specific table for it.                              |                  |
| `mode`                                         | Specific configuration for each mode                                                                        |                  |
| `httpServer.port`                              | Port number for the HTTP server.                                                                            | 7171             |
| `httpServer.sslCertificate.certFileName`       | Path to the certificate file for SSL.                                                                       |                  |
| `httpServer.sslCertificate.privateKeyFileName` | Path to the private key file for SSL.                                                                       |                  |

## Mode-Specific Configuration

The Node's functionality is influenced by its operating `mode`. The following tables describe specific configurations for
Standalone and Network modes.

### Standalone Mode Configuration

| Object.Property               | Description                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------- |
| `mode.type`                   | Set to 'standalone' for Standalone Mode.                                           |
| `mode.trackedStreams`         | Array of objects defining streams to track and the number of partitions they have. |
| `mode.topicsStream`           | Stream ID for validation results from predefined processes.                        |
| `mode.validationErrorsStream` | Stream ID for schema validation errors.                                            |

### Network Mode Configuration

| Object.Property                                   | Description                                                                                                 | Default Behavior                     |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `mode.type`                                       | Set to 'network' for integration into the decentralized Log Store Network.                                  |
| `plugins.logStore.logStoreConfig.refreshInterval` | Interval in milliseconds to refresh set of data streams to store from Smart Contracts. Set to 0 to disable. | 600000 (10 minutes)                  |
| `plugins.logStore.programs.chainRpcUrls`          | (_Deprecated_) Mapping of ChainId to its corresponding RPC URL for "programs" usage                         | `{"137": "https://polygon-rpc.com"}` |

## Database Configuration

The following properties are applied to the `plugins.logStore` object of the configuration. eg. `plugins.logStore.db.type`.

### SQLite

| Object.Property | Description                                                | Default Behavior       |
| --------------- | ---------------------------------------------------------- | ---------------------- |
| `db.type`       | Type of database to use. Options are 'sqlite'.             | sqlite                 |
| `db.dataPath`   | Path to SQLite database file, absolute or relative to cwd. | .data/logstore-data.db |

## CassandraDB

| Object.Property            | Description                                            | Default Behavior |
| -------------------------- | ------------------------------------------------------ | ---------------- |
| `db.type`                  | Type of database to use. Options are 'cassandra'.      |                  |
| `db.hosts`                 | Array of hostnames for the Apache Cassandra cluster.   |                  |
| `db.username`              | Username for Apache Cassandra authentication.          |                  |
| `db.password`              | Password for Apache Cassandra authentication.          |                  |
| `db.keyspace`              | Keyspace name in Apache Cassandra.                     |                  |
| `db.datacenter`            | Name of the datacenter in Apache Cassandra.            |                  |
| `cluster.clusterAddress`   | Address of the LogStore node cluster.                  |                  |
| `cluster.clusterSize`      | Total number of nodes in the LogStore cluster.         | 1                |
| `cluster.myIndexInCluster` | Index of the current node within the LogStore cluster. | 0                |

Learn more by reviewing the [JSON schema for the Plugin Configuraton](https://github.com/usherlabs/logstore-node/blob/master/packages/core/src/plugins/logStore/config.schema.json).

## Examples

For more information on usage, **[check out our set of configuration examples](https://github.com/usherlabs/logstore-node/tree/master/config-examples)** available on the repository.
