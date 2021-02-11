// this is to make sure we are not missing any variables from .env

if (!process.env.REACT_APP_ENV) {
  throw new Error("REACT_APP_ENV required from env")
}
if (!process.env.REACT_APP_API_URL) {
  throw new Error("REACT_APP_API_URL required from env")
}

const config = {
  env: process.env.REACT_APP_ENV,
  apiUrl: process.env.REACT_APP_API_URL,
  nodePath: process.env.NODE_PATH
}

module.exports.config = config
