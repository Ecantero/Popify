import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./dbbDocClient.js";

// Set the parameters.
export const params = {
  TableName: "Tracks",
  Key: {
    primaryKey: "id",
  },
};

export const getItem = async () => {
  try {
    const data = await ddbDocClient.send(new GetCommand(params));
    console.log("Success :", data.Item);
  } catch (err) {
    console.log("Error", err);
  }
};

getItem();