---
sidebar_position: 2
title: 'Architecture'
---

Verity is a network of nodes, where each node plays one of four roles:

1. **Provers**:

   Any entity aiming to prove their data sources are true is considered a **Prover**.

2. **Notaries**:

   Assist in privacy-preserving authenticity and integrity proof generation for **Provers** of HTTP and API requests, without learning the actual data.

3. **Verifier**:

   The **Verifier** role is assumed by the destination system, typically a blockchain where verification is trustless. However, this may also be a centralised **Verifier** aggregating proof of data flow for analytical purposes.

4. **Coordinator**:

   This role is currently assumed by Usher Labs but can be decentralised in the future.

   The **Coordinator** facilitates security oversight of engagements between **Provers** and **Notaries**. Its primary purpose is to use advanced analysis to prevent collusion between these two roles. When a **Prover** initiates a session, the **Coordinator** provides an authentication key to secure the session. **Notary** selection is based on randomness, reputation, latency/geography, blockchain transaction history, wallet associations, identity, etc.

   Additionally, successful engagements by the **Prover** and **Notary** result in digital asset rewards. This is managed by zkProof of Work. A secure data pipeline that prevents the **Coordinator** from tampering with work rewards for network participants.

   The **Coordinator** resembles a sequencer in a Layer 2 (L2) network, with its sole purpose being security.

![View a [walkthrough of this architecture](https://www.loom.com/share/3454d9b3cd8943339fbb3d12c4371d5b?sid=8bdd04ac-cb72-4f80-bfcb-51ad7b11bdb5) learn more. To explore the various architectures, please visit [Verity Architecture](https://miro.com/app/board/uXjVK4FD_7I=/?share_link_id=532402514253).](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1ba339e1-ec4d-4c25-b0be-b85f0cde7ac2%2F03b11519-52de-4c8e-bb84-99da4f0e287d%2FVerity_Architecture_for_General_Purpose.jpeg?table=block&id=a29f222e-dfb7-4daa-ac25-a924fce82122&spaceId=1ba339e1-ec4d-4c25-b0be-b85f0cde7ac2&width=2000&userId=4e604ee3-38f1-4cd3-8e60-a6fa0b61476b&cache=v2)

View a [walkthrough of this architecture](https://www.loom.com/share/3454d9b3cd8943339fbb3d12c4371d5b?sid=8bdd04ac-cb72-4f80-bfcb-51ad7b11bdb5) learn more. To explore the various architectures, please visit [Verity Architecture](https://miro.com/app/board/uXjVK4FD_7I=/?share_link_id=532402514253).

## **Process**

1. Verity **Prover** technology operates in the background, similar to a VPN. When a request is made from the OS, the **Prover** begins its work.
2. The **Prover** initiates a session by requesting authentication from the **Coordinator**.
3. Upon receiving the carefully selected **Notary** for assistance in proof generation, the **Prover** authenticates and engages the **Notary**.
4. The **Notary** assists in proving network requests to various data sources. Under the hood, a cryptographic two-party MPC session is facilitated between the **Prover** and **Notary**.

   Unlike other two-party MPC networks, **Notaries** are decentralised to operate at the edge, minimising latency in network communication.

5. Once an MPC session is complete, the **Prover** collates proofs of data sources locally and can forward these proofs over a socket connection to local processes for further management.
6. These adjacent local processes can include additional data processing, facilitated by the [Verity Data Processor](https://www.notion.so/Usher-Labs-Platform-Verity-Update-547846f3c0084558b00e47fda3cd1f94?pvs=21), or a local Oracle responsible for aggregating verifiable data and submitting it to the destination blockchain.
