---
title: 'Getting Started'
sidebar_position: 1
---

# Getting Started

Welcome to the Log Store API, an HTTP API designed to facilitate efficient data storage and retrieval.

### Base URL

To interact with the Log Store API, you'll need to send requests to a running API Log Store Node operating in `standalone` mode.

The base URL for the sake of this documentation is **`https://api.logstore.usher.so`**; however, in your case, it will be the URL configured to route to the port of your running Node.

### Request and Response Format

Interactions with the API are facilitated through HTTP requests. The format of the response data is typically determined by a specific parameter. Standard HTTP response status codes such as 200 (OK), 400 (Bad Request), and 500 (Internal Server Error) are utilized to signify the outcome of your request.

### Prerequisites

Before you can start using the API, there are a few things you need to know:

1. **Authentication**: To use the API, you'll need to authenticate your requests. This is done using your API keys. More information on this can be found in the **Authentication** section.
2. **ECDSA (Ethereum) Wallet**: Given the Ethereum-based authentication mechanism, you'll need a wallet to interact with the API.

### Quickstart Guide

Ready to make your first API call? Here's a simple example using JavaScript:

```js title="JS Example"
const axios = require('axios');
const API_BASE_URL = 'https://api.logstore.usher.so';

axios
	.get(`${API_BASE_URL}/my-endpoint`, {
		headers: {
			// replace with your actual API key
			Authorization: 'Basic {Base64 encoded user:signature}',
		},
	})
	.then((response) => {
		console.log(response.data);
	})
	.catch((error) => {
		console.error(`Error: ${error}`);
	});
```

This script sends a GET request to the `my-endpoint` endpoint. Replace `{Base64 encoded user:signature}` with your own
user and signature in the format described in
the [Authentication](./authentication.md) section.
