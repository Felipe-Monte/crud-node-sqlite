import { Router } from "express";
import PersonController from "../controller/PersonController.js"
const personController = new PersonController()

const router = Router();

router.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    message: "API Rondado",
  });
});

router.get("/person", personController.index);
router.get("/person/:id", personController.show);
router.post("/person", personController.create);
router.put("/person", personController.update);
router.delete("/person/:id", personController.delete);

export default router;
