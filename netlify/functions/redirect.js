const fs = require("fs");
const { join } = require("path");

exports.handler = async function (event, context) {
  const path = event.path.split("/redirect")[1];

  if (!path || path === "/" || path === "/index.html") {
    return {
      statusCode: 200,
      body: fs.readFileSync(join(__dirname, "../..", "index.html")).toString(),
    };
  }

  return {
    statusCode: 301,
    headers: {
      Location: redirectTo,
    },
  };
};
