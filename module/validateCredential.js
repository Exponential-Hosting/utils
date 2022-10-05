const md5 = require("md5");

const validateCredential = (apiSecret, req, res, next) => {
  const query = req.url.split('?')[1] || "";
  const { computedSignature, querySignature } = __computeSignature(apiSecret, query);

  // console.log(computedSignature, ' <----> ', signature);

  if (computedSignature === querySignature) {
    next();
  } else {
    res.status(401).json({
      message: "The request was unacceptable. API KEY validation failed.",
    });
    return;
  }
};

const __computeSignature = (apiSecret, query) => {
  const reqUrlSearchParams = new URLSearchParams(query);
  const params = Object.fromEntries(reqUrlSearchParams.entries());
  const querySignature = params.signature || "";
  delete params.signature;

  const sortedStr = Object.keys(params)
    .sort()
    .map((paramKey) => `${paramKey}=${params[paramKey]}`)
    .join("|");
  const computedSignature = md5(sortedStr + apiSecret).toString();
  return { computedSignature, querySignature };
};

const computeSignature = (apiSecret, query) => { 
  const { computedSignature, querySignature } = __computeSignature(apiSecret, query);
  if (querySignature !== "") {
    throw new Error("query should not contain a signature parameter since it should be used to send the signature from the Exponential sever");
  }
  return computedSignature;
};

module.exports = {
  validateCredential,
  computeSignature
};
