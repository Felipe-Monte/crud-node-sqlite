import { Router } from "express";
import {
  createTable,
  insertPerson,
  updatePerson,
  showAllPersons,
  showUniquePerson,
  deletePerson,
} from "../controller/Person.js";

const router = Router();

router.get("/", (req, res) => {
   res.send("Trabalhando com rotas")
});

export default router;