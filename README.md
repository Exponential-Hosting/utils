# utils

---
<a href="https://github.com/ExponentialAquaNetworks/utils/issues"><img src="https://img.shields.io/github/issues/Exponential-Hosting/utils"></a>
<a href="https://github.com/ExponentialAquaNetworks/utils/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Exponential-Hosting/utils"></a>
<a href="https://twitter.com/intent/tweet?text=https%3A%2F%2Fgithub.com%2FExponential-Hosting%2Futils"><img src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FExponential-Hosting%2Futils"></a>

## validateCredential

This method can be used to validate calls made from the Datacloud.sh server to the API. To use this, download this package and import validateCredential then use it as a middleware in api.

### Installation:

```
npm install @exponential/developer-utils
```

### Quick Start:

```
const { validateCredential } = require('@exponential/developer-utils');

app.get("/path-to-be-authenticated-1", validateCredential.bind(null, process.env.API_SECRET), async (req, res) => {

})

app.post("/path-to-be-authenticated-2", validateCredential.bind(null, process.env.API_SECRET), async (req, res) => {

})
```
