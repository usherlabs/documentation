---
title: Modes & Databases
sidebar_position: 2
---

## Modes

The Log Store Node, central to the Log Store Network, operates in two distinct modes, each catering to different data management needs while ensuring data integrity and authenticity.

The Log Store Node operates in two distinct modes, each catering to different data management needs while ensuring data integrity and authenticity.

1. **Network Mode**:

   - Functions as a part of the decentralized Log Store Network.
   - Requires LSAN tokens for user access management and compensating network operations, aligning with its decentralized nature.
   - Powers the decentralized network, enabling real-time data storage, access, and delivery for applications.
   - Users do not need to run a node to use the network.

2. **Standalone Mode**:
   - Operates independently, allowing for tailored data stream storage and management without network dependency.
   - No need to stake tokens to operate and manage the node, functioning as a centralized indexer for real-time data.
   - Suited for scenarios requiring controlled, verifiable data management in an isolated storage environment.

## Databases

The Log Store Node supports two databases: Apache Cassandra and SQLite.

### Apache Cassandra

Apache Cassandra is utilized for large-scale storage requirements where many data streams are being indexed. It is highly recommended for Network Nodes to leverage Cassandra due to its ability to manage extensive data efficiently. In Standalone mode, the Node independently stores data in a configured Cassandra instance, making each Node a self-contained unit for data management.

Integrating CassandraDB with the Log Store Node involves a few essential steps:

- **Configuration File**: Set up your LogStore Node to connect with a CassandraDB instance. This involves specifying the database details in the [Node's configuration file](./config.md).
- **Database Schema**: Refer to **`keyspace.example.cql`** in the LogStore Node repository. [This file](https://github.com/usherlabs/logstore-node/blob/master/config-examples/keyspace.example.cql) outlines the required database schema for CassandraDB, ensuring proper data structure and organization.

### SQLite

SQLite is a leaner database that simplifies the operation of Standalone Nodes. It is ideal for scenarios where a single or a few data streams are tracked for storage and access requirements. SQLite's simplicity and ease of use make it well-suited for controlled, verifiable data management in an isolated storage environment.
