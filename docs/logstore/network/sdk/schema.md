---
title: 'Schema Validation'
sidebar_position: 5
---

## Overview

Schema Validation is an optional feature powered by AJV that enables automatic validation of streaming data before it is stored by the network.

This ensures only data that meets the defined schema criteria is stored. Defining a schema is not mandatory for stream storage.

## Schema Type

- **JSON Schema Specification**: AJV is utilized for schema validation in alignment with the [JSON Schema standard](https://json-schema.org/learn/getting-started-step-by-step). This approach grants access to AJV's comprehensive feature set while also adhering to its constraints. For optimal schema implementation, [consult AJV's documentation](https://ajv.js.org/json-schema.html) to confirm compatibility with your specific requirements.
- `ethereum-address`: This type uses regular expressions to validate Ethereum addresses accurately.

For specific AJV options used in our schema validations, refer to our [GitHub Repository](https://github.com/usherlabs/logstore-node/blob/master/packages/core/src/config/validateConfig.ts).

## Storage Modes and Future Developments

- **Current Storage Mode - RAW**: In the RAW mode, the schema information is directly stored on-chain, offering a simple and efficient approach to schema management.
- **Future Protocol Support**: We are actively working to support decentralized storage protocols like **`ARWEAVE`** and **`IPFS`**. These will provide more flexible options for schema information storage and retrieval.

## Utilizing Client’s Schema Methods

1. **removeValidationSchema**: This method removes an existing schema from a specified stream, which means new data will not be validated against this schema.

   **Usage**:

   ```tsx
   await logStoreClient.removeValidationSchema({
   	streamId: '<your-stream-id>',
   });
   ```

2. **getValidationSchema**: Retrieves the schema associated with a given stream, returning either the schema or **`null`**.

   **Usage**:

   ```tsx
   const schema = await logStoreClient.getValidationSchema({
   	streamId: '<your-stream-id>',
   });
   ```

3. **setValidationSchema**: Associates a stream with a schema, supporting direct schema objects for RAW mode and hash references for future ARWEAVE/IPFS modes.

   **Usage**:

   ```tsx
   await logStoreClient.setValidationSchema({
   		 streamId: '<your-stream-id>',
   		 schemaOrHash: <your-schema-object-or-hash>,
   		 protocol: '<RAW|ARWEAVE|IPFS>'
   });
   ```

   - **`streamId`**: The ID of the stream.
   - **`schemaOrHash`**: The schema object for RAW or a hash identifier for ARWEAVE/IPFS.
   - **`protocol`**: The protocol for storing the schema.

## Handling Validation Errors

All validation errors encountered during the processing of incoming events are directed to a specialized stream: **`0xeb21022d952e5De09C30bfda9E6352FFA95F67bE/validation-errors`**.

:::note
If you are operating a standalone node, you should configure the destination stream for these validation errors. Otherwise, errors will just get logged. For more details on this configuration, please refer to the [**node configuration reference**](../../node/quick-start/config.md).
:::
