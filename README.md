# utils

---

[![NPM dependencies][npm-dependencies-image]][npm-dependencies-url] [![Last commit][last-commit-image]][last-commit-url] [![Last release][release-image]][release-url] 

## validateCredential

This method can be used to validate api_key. To use this, download this package and import validateCredential then use it as a middleware in api.

### Installation:

```
npm install @exponential/utils
```

### Quick Start:

```
const { validateCredential } = require('@exponential/utils');

app.post("/", validateCredential.bind(null, process.env.API_KEY), async (req, res) => {

})
```
