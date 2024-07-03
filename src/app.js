// import { openDb } from "./configDB.js";
import express from "express";
const app = express();
app.use(express.json());

import router from "./routes/routes.js";
app.use(router)

// app.get("/", (request, response) => {
//   response.send("Hello, world!");
// });

// app.get("/person", async (request, response) => {
//   let allPersons = await showAllPersons();
//   response.json(allPersons);
// });

// app.get("/person/:id", async (request, response) => {
//   let specificPerson = await showUniquePerson(request.params.id);
//   response.json(specificPerson);
// });

// app.post("/person", (request, response) => {
//   if (!request.body.name) {
//     return response.status(400).json({
//       statusCode: 400,
//       error: "Bad request",
//       msg: "Campo nome está vazio!",
//     });
//   } else {
//     insertPerson(request.body);
//     return response.status(200).json({
//       statusCode: 200,
//       msg: "Pessoa inserida com sucesso!",
//     });
//   }
// });

// app.put("/person", (request, response) => {
//   if (request.body && !request.body.id) {
//     return response.status(400).json({
//       statusCode: 400,
//       msg: "ID não informado!",
//     });
//   } else {
//     updatePerson(request.body);
//     return response.status(200).json({
//       statusCode: 200,
//       msg: "Pessoa atualizada com sucesso!",
//     });
//   }
// });

// app.delete("/person/:id", async (request, response) => {
//   try {
//     let specificPerson = await showUniquePerson(request.params.id);

//     if (!specificPerson) {
//       return response.status(404).json({
//         message: "ID não encontrado no banco de dados",
//       });
//     }
//     let deleteFromPerson = await deletePerson(request.params.id);
//     response.json({
//       message: "Pessoa deletada com sucesso",
//     });
//   } catch (error) {
//     response.status(500).json({
//       message: "Erro ao tentar deletar a pessoa",
//       error: error.message,
//     });
//   }
// });

app.listen(3000, () => {
  console.log(`Server is running`);
});
