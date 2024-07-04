import 'express-async-errors';
import AppError from './utils/AppError.js';
import express from "express";
import router from "./routes/routes.js";
import { createPersonTable } from "./database/database.js"

const app = express();
app.use(express.json());

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
