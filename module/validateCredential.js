const md5 = require("md5");

const validateCredential = (apiSecret, req, res, next) => {
  const query = req.url.split('?')[1] || "";
  const computedSignature = computeSignature(apiSecret, query);

  // console.log(computedSignature, ' <----> ', signature);

  if (computedSignature === req.get('signature')) {
    next();
  } else {
    res.status(401).json({
      message: "The request was unacceptable. API KEY validation failed.",
    });
    return;
  }
};

const computeSignature = (apiSecret, query) => {
  const reqUrlSearchParams = new URLSearchParams(query);
  const params = Object.fromEntries(reqUrlSearchParams.entries());

  const sortedStr = Object.keys(params)
    .sort()
    .map((paramKey) => `${paramKey}=${params[paramKey]}`)
    .join("|");
  const computedSignature = md5(sortedStr + apiSecret).toString();
  return computedSignature;
};

module.exports = {
  validateCredential,
  computeSignature
};
