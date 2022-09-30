const md5 = require("md5");

const validateCredential = async (req, res, next) => {
  const API_KEY = req.headers.api_key || "";
  const reqUrlSearchParams = new URLSearchParams(req.url.substring(1));
  const params = Object.fromEntries(reqUrlSearchParams.entries());
  const signature = params.signature || "";
  delete params.signature;

  const sortedStr = Object.keys(params)
    .sort()
    .map((paramKey) => `${paramKey}=${params[paramKey]}`)
    .join("|");
  const computedSignature = md5(sortedStr + API_KEY).toString();

  // console.log(computedSignature, ' <----> ', signature);

  if (computedSignature === signature) {
    next();
  } else {
    res
      .status(401)
      .json({
        message: "The request was unacceptable. API KEY validation failled.",
      });
    return;
  }
};

module.exports = validateCredential;