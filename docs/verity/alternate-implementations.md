---
sidebar_position: 5
title: 'Alternate Implementations'
---

## Blockchain Extension

Verity’s Verifiers serve as the coordination and verification layer of the network. While Verifiers will be deployed for general-purpose use, Verity is designed to empower sovereign blockchains with enhanced capabilities for verifying real-world data. Verifier Sidecars are created to extend blockchain nodes, effectively embedding their role into the base layer of a blockchain.

_The first compatible blockchains will be based on CometBFT. However, Usher Labs is prepared to collaborate with any blockchain team to enable this functionality as a first-class feature._

By extending Blockchain Nodes with this verification functionality, the extended blockchain becomes immediately compatible with the already deployed network of Notaries and Provers.

Additionally, the blockchain can incorporate abstracted functions with Smart Contract logic to simplify the integration and utility of real-world data.

![To explore the various architectures, please visit [Verity Architecture](https://miro.com/app/board/uXjVK4FD_7I=/?share_link_id=532402514253).](https://prod-files-secure.s3.us-west-2.amazonaws.com/1ba339e1-ec4d-4c25-b0be-b85f0cde7ac2/e78713a8-edfc-4ac6-b16b-577a1c131553/Verity_Architecture_for_Sovereign_Blockchains.jpeg)

To explore the various architectures, please visit [Verity Architecture](https://miro.com/app/board/uXjVK4FD_7I=/?share_link_id=532402514253).

## Transparency and Observability for Data Analysis

Cryptographically enforcing verification of real-world data directly within Blockchain Nodes and Smart Contracts may introduce additional considerations, such as upgrade requirements, migrations, and operator coordination. To alleviate these risks while adopting the value of transparent data, Verity can be leveraged preliminarily for the purpose of data analysis.

The network roles are maintained; however, instead of pushing transparency proofs to a trustless environment for verification, this metadata is forwarded to a centralised aggregator. Here, it is verified and used to analyse how data impacts the blockchain and where trust is established and maintained.

This approach offers significant insights to blockchain developers, auditors and communities, revealing the true source of data powering various protocols. It helps determine whether there is a need for diversification of data sources or if there are synergies with particular data providers that were previously unknown to the core team.

Beyond analysing data and trust flow, this same pipeline enables observability over network operator health, uptime, and more. It indicates whether new updates pose risks to operators or if there are code-level optimisations that can be applied.

![To explore the various architectures, please visit [Verity Architecture](https://miro.com/app/board/uXjVK4FD_7I=/?share_link_id=532402514253).](https://prod-files-secure.s3.us-west-2.amazonaws.com/1ba339e1-ec4d-4c25-b0be-b85f0cde7ac2/f469bb28-5d5e-4184-ae66-e199a1f99bcd/Verity_Architecture_for_Analysis.jpeg)

To explore the various architectures, please visit [Verity Architecture](https://miro.com/app/board/uXjVK4FD_7I=/?share_link_id=532402514253).
