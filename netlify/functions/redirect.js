const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  const redirectTo = process.env.REDIRECT_TO || "https://example.com";
  const requestPath = event.path;

  // Do not redirect the root path
  if (requestPath === "/" || requestPath === "/index.html") {
    const indexPath = path.resolve(__dirname, '../../index.html');
    const indexContent = fs.readFileSync(indexPath, 'utf8');

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: indexContent
    };
  }

  return {
    statusCode: 301,
    headers: {
      Location: redirectTo,
    },
  };
};
