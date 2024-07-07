---
title: 'Authentication'
sidebar_position: 2
---

# Authentication

## Basic Authentication

In the context of the API, Basic Authentication is used for access management. The user's wallet address and its signature are extracted from the **`Authorization`** header.

- The username is the consumer's wallet address.
- The password is a signature produced by the wallet address, where the signature payload is the wallet address.

  ```javascript
  const sig = signer.signMessage(walletAddress);
  ```

An example of this implemented in Golang can be found here:

1. [Authentication via Basic Auth](https://github.com/usherlabs/kwil-ls-oracle/blob/main/internal/logstore_client/authentication.go)
2. [Request to LS Node](https://github.com/usherlabs/kwil-ls-oracle/blob/main/internal/logstore_client/logstore_client.go#L56)

Both values are encoded in Base64 format. The format is:

**`basic {Base64 encoded walletAddress:signature}`**

```sh title="cURL Example"
curl 	--request GET 'https://api.logstore.usher.so/...' \
		--header 'authorization: basic Y2F0ZWdvcnkwMzQwMjQwMzQwMjQwMzQ'
```

## Errors

If a request is not properly authenticated, it will result in an error. You should expect HTTP `401 Unauthorized` and HTTP `403 Forbidden` responses.

## Best Practices

While interacting with the API, follow these best practices to ensure a secure and reliable experience:

- **Safeguard your keys**: Keep your private keys secure and use them properly in different environments. Never share your keys in publicly accessible areas or client-side code.
- **Use HTTPS**: To protect the integrity and confidentiality of the data being transmitted, always use HTTPS when making API requests.
- **Implement EVM-based authentication securely**: When implementing EVM-based authentication, ensure the user's Ethereum address matches the address derived from the signature in the **`Authorization`** header. This verifies the authenticity of the request and the identity of the user.
