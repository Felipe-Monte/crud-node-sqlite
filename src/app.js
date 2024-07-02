// import { openDb } from "./configDB.js";
import {
  createTable,
  insertPerson,
  updatePerson,
} from "./Controller/Person.js";

import express from "express";

const app = express();
app.use(express.json());

createTable();

app.get("/", (request, response) => {
  response.send("Hello, world!");
});

app.post("/person", (request, response) => {
  insertPerson(request.body);
  response.json({
    statusCode: 200,
  });
});

app.put("/person", (request, response) => {
  if (request.body && !request.body.id) {
    response.json({
      statusCode: 400,
      msg: "ID não informado!",
    });
  } else {
    updatePerson(request.body);
    response.json({
      statusCode: 200,
    });
  }
});

app.listen(3000, () => {
  console.log(`Server is running`);
});
