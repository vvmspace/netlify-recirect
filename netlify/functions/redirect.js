exports.handler = async function(event, context) {
    const redirectTo = process.env.REDIRECT_TO || "https://hamster2.top/";
    return {
      statusCode: 301,
      headers: {
        Location: redirectTo,
      },
    };
  };
  