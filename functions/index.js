exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTION",
      },
        body: "Hello World"
    };
}
