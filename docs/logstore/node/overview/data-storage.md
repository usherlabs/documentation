---
title: Data Storage
sidebar_position: 2
---

# Data Storage

## Data Storage with Apache Cassandra

The LogStore Node utilizes Apache Cassandra for data storage, effectively managing streaming data. In Standalone mode, the Node independently stores data in a configured Cassandra instance, making each Node a self-contained unit for data management.

## Setting up CassandraDB for the LogStore Node

Integrating CassandraDB with the LogStore Node involves a few essential steps:

- **Configuration File**: Set up your LogStore Node to connect with a CassandraDB instance. This involves specifying the database details in the [Node's configuration file](../quick-start/config.md).
- **Database Schema**: Refer to **`keyspace.example.cql`** in the LogStore Node repository. [This file](https://github.com/usherlabs/logstore-node/blob/develop/config-examples/keyspace.example.cql) outlines the required database schema for CassandraDB, ensuring proper data structure and organization.

:::note
The LogStore Node will soon migrate to chDB (ClickHouse DB), transitioning to an embedded, SQL-centric data storage approach.
:::
