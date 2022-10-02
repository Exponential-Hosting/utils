# utils

---
<img src="https://img.shields.io/github/issues/Exponential-Hosting/utils"> <img src="https://img.shields.io/github/license/Exponential-Hosting/utils" href="https://github.com/Exponential-Hosting/utils/issues"> <img src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FExponential-Hosting%2Futils">

## validateCredential

This method can be used to validate api_key. To use this, download this package and import validateCredential then use it as a middleware in api.

### Installation:

```
npm install @exponential/utils
```

### Quick Start:

```
const { validateCredential } = require('@exponential/utils');

app.get("/path-to-be-authenticated-1", validateCredential.bind(null, process.env.API_KEY), async (req, res) => {

})

app.post("/path-to-be-authenticated-2", validateCredential.bind(null, process.env.API_KEY), async (req, res) => {

})
```
