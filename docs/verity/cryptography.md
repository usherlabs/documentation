---
sidebar_position: 3
title: 'Cryptography'
---

# Cryptography

Verity employs the MPC-TLS primitive to create authenticity and integrity proofs for TLS/API requests. This allows a **Prover** to prove the source of their data and ensure it has not been tampered with.

In a typical HTTP request, a cryptographic (TLS) handshake occurs between the requestor and the responder server. The MPC-TLS primitive leverages standard TLS cryptography, enabling the server hosting the API to remain agnostic to this specific type of TLS request. This approach allows many existing API-powered services to become cryptographically provable.

To facilitate the MPC exchange, the requestor involves a third-party **Notary** in the socket connection. This allows the Notary to independently receive packets and perform authenticity checks on the data exchange between the original parties, co-signing the TLS handshake. The key advantage of this cryptographic engagement is that the Notary remains completely blind to the core data within the TLS request and response.

Verity leverages a fork of the open-source [TLSNotary Protocol](https://mirror.xyz/privacy-scaling-explorations.eth/T4MR2PgBzBmN2I3dhDJpILXkQsqZp1Bp8GSm_Oo3Vnw). By default, this protocol assumes that the Prover and Notary are non-collusive. Verity addresses this limitation through collusion prevention and integrity verification facilitated by **Verifiers**. Instead of directly involving a Notary, **Provers** first receive instructions from **Verifiers** specifying the authorised Notary. **Verifiers** then cross-reference signals from both parties to ensure integrity verification, resulting in secure proof of data sources.

TLSNotary’s proofs are not portable by default, meaning they cannot be verified across various blockchains and verifiable compute environments. Verity resolves this by breaking down TLS proofs into sub-proofs, enabling multi-party verification. This approach is crucial for allowing ZK and decentralised co-processors to verify proofs of data sources, facilitating subsequent verifiable data processing and integration into various blockchains.

In summary, Verity provides transparency in data lineage and end-to-end verified data pipelines. It can be enabled as an extension of any blockchain to serve various communities and ecosystems. Verity will launch with a general-purpose core Verifier set to deliver this value across numerous blockchain applications.
