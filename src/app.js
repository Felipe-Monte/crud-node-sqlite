// import { openDb } from "./configDB.js";
import {
  createTable,
  insertPerson,
  updatePerson,
  showAllPersons
} from "./Controller/Person.js";

import express from "express";

const app = express();
app.use(express.json());

createTable();

app.get("/", (request, response) => {
  response.send("Hello, world!");
});

app.get("/person", async (request, response) => {
  let allPersons = await showAllPersons()
  response.json(allPersons)
});

app.post("/person", (request, response) => {
  if(!request.body.name){
    return response.status(400).json({
      "statusCode": 400,
      "error": "Bad request",
      "msg": "Campo nome está vazio!"
    })
  }else{
    insertPerson(request.body);
    return response.status(200).json({
      "statusCode": 200,
      "msg": "Pessoa inserida com sucesso!"
    });
  }
});

app.put("/person", (request, response) => {
  if (request.body && !request.body.id) {
    return response.status(400).json({
      "statusCode": 400,
      "msg": "ID não informado!",
    });
  } else {
    updatePerson(request.body);
    return response.status(200).json({
      "statusCode": 200,
      "msg": "Pessoa atualizada com sucesso!"
    });
  }
});

app.listen(3000, () => {
  console.log(`Server is running`);
});
