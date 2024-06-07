exports.handler = async function (event, context) {
  const redirectTo = process.env.REDIRECT_TO;
  return {
    statusCode: 301,
    headers: {
      Location: redirectTo,
    },
  };
};
