const md5 = require("md5");
const timestampLimitInSecond = 300;

const validateCredential = async (API_SECRET, req, res, next) => {
  const REQ_API_SECRET = req.headers._EXPONENTIAL_API_SECRET || "";
  const reqTimestamp = req.query.timestamp || 0;
  const currentTimestamp = new Date().valueOf();
  const timestampRange = reqTimestamp+timestampLimitInSecond*1000;
  
  if(currentTimestamp > timestampRange || REQ_API_SECRET != API_SECRET){
    res.status(401).json({
      message: "The request was unacceptable. API KEY validation failled.",
    });
    return;
  }

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
    res.status(401).json({
      message: "The request was unacceptable. API KEY validation failled.",
    });
    return;
  }
};

module.exports = validateCredential;