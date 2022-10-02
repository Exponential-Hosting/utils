# utils

---

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
