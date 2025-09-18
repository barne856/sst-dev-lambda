import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log("hello");
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World!" })
  };
};