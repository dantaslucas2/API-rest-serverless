export default function handler(lambda) {
  return async function (event, context) {
    let body, statusCode;

    try {
      // Run the Lambda
      body = await lambda(event, context);
      console.log(body);
      console.log("******************************************************************************");
      statusCode = 200;
    } catch (e) {
      console.log("Teste a seguir");
      console.log(e);
      console.log("Fim do teste");
      body = { error: e.message };
      statusCode = 500;
    }

    // Return HTTP response
    return {
      statusCode,
      body: JSON.stringify(body),
      headers: {
            //"Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            //"Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
    };
  };
}