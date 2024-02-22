---
sidebar_position: 6
title: Streamr Storage Provider
---

The Log Store Network now seamlessly integrates with the Streamr Network, offering a streamlined approach to data storage without the need for additional library integrations for applications publishing data via Streamr. This compatibility enhances the Log Store's utility by making it directly accessible as a Storage Provider within the Streamr ecosystem.

## How It Works

The Log Store Network introduces a "Virtual" Storage Node within the Streamr Network. This design allows the Log Store's robust, fault-tolerant, and replicated time-series database network to appear as a single Storage Node in Streamr, enabling easy data storage operations.

## _Virtual_ Storage Node Address

The _Virtual_ Storage Node is accessible at: `0x17f98084757a75add72bf6c5b5a6f69008c28a57`.

## Usage Guide

Ensure the `$PRIVATE_KEY` environment variable is set before executing the following commands:

```shell
export PRIVATE_KEY=<your_private_key>
```

Replace `<your_private_key>` with your actual private key and `/test-01` with your desired stream name.

### Creating a Stream

```shell
streamr stream create --private-key $PRIVATE_KEY /test-01
```

### Granting Permissions (Optional)

To allow public publish and subscribe permissions:

```shell
streamr stream grant-permission \
  --private-key $PRIVATE_KEY \
  /test-01 \
  public \
  publish subscribe
```

### Adding a Stream to the _Virtual_ Storage Node

```shell
streamr storage-node add-stream \
  --private-key $PRIVATE_KEY \
  0x17f98084757a75add72bf6c5b5a6f69008c28a57 \
  /test-01
```

If you encounter a timeout error, verify the stream's assignment to the _Virtual_ Storage Node:

```shell
streamr storage-node list-streams 0x17f98084757a75add72bf6c5b5a6f69008c28a57
```

### Publishing Messages

Publish messages to your stream:

```shell
streamr stream publish --private-key $PRIVATE_KEY /test-01
```

Input JSON messages line-by-line in the format:

```shell
{"test":1}
{"test":2}
...and so on.
```

### Utilizing Streamr's Resend Feature

Resend the last 10 messages:

```shell
streamr stream resend last \
  --private-key $PRIVATE_KEY \
  10 /test-01
```

### Removing a Stream from the _Virtual_ Storage Node

```shell
streamr storage-node remove-stream \
  --private-key $PRIVATE_KEY \
  0x17f98084757a75add72bf6c5b5a6f69008c28a57 \
  /test-01
```

### Deleting a Stream

Currently, the Streamr CLI does not support stream deletion. Use the Streamr Hub for this purpose.
