const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  const redirectTo = process.env.REDIRECT_TO || "https://example.com";
  const requestPath = event.path;

  return {
    statusCode: 200,
    body: JSON.stringify({
        event,
        context,
    })
  }

  return {
    statusCode: 301,
    headers: {
      Location: redirectTo,
    },
  };
};
