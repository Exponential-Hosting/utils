# utils
***
## validateCredential
This method can be used to validate api_key. To use this, get utils module in project and import validateCredential and use it as a middleware in api.

Example:
```
const validateCredential = require('./utils/validateCredential');

app.post("/", validateCredential, async (req, res) => {

})
 
```