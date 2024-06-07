exports.handler = async function(event, context) {
    const redirectTo = process.env.REDIRECT_TO || "https://hamster2.top/";
    
    if (path === "/" || path === "/index.html") {
        return {
          statusCode: 200,
          body: "This is the root page, no redirection."
        };
    }
    
    return {
      statusCode: 301,
      headers: {
        Location: redirectTo,
      },
    };
  };
  