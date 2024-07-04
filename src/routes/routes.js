import { Router } from "express";
import {
  createTable,
  insertPerson,
  updatePerson,
  showAllPersons,
  showSpecificPerson,
  deletePerson,
} from "../controller/Person.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    message: "API Rondado",
  });
});

router.get("/person", showAllPersons);
router.get("/person/:id", showSpecificPerson);
router.post("/person", insertPerson);
router.put("/person", updatePerson);
router.delete("/person/:id", deletePerson);

export default router;
