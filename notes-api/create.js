import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  console.log(data);
  console.log("###################################################################################");

  const params = {
    TableName: process.env.tableName,
    Item: {
      // The attributes of the item to be created
      userId: "123", // The id of the author
      noteId: uuid.v1(), // A unique uuid
      content: data.content, // Parsed from request body
      attachment: data.attachment, // Parsed from request body
      createdAt: Date.now(),
      nome: data.nome,// Current Unix timestamp
      telefone: data.telefone,
      modelo: data.modelo,
      quantidade: data.quantidade,
      email: data.email,
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});