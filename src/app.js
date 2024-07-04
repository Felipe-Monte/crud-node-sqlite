import 'express-async-errors';
import AppError from './utils/AppError.js';
import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";
import router from "./routes/routes.js";
import { createPersonTable } from "./database/database.js"

const app = express();
app.use(express.json());
app.use(cors())

await createPersonTable()

app.use(router);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3000, () => {
  console.log(`Server is running`);
});

https.createServer({
  cert: fs.readFileSync("src/SSL/code.crt"),
  key: fs.readFileSync("src/SSL/code.key")
}, app).listen(3001, ()=>console.log("Rodando em https"));
