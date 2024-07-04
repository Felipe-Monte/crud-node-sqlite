import { Router } from "express";
import PersonController from "../controller/PersonController.js"
const personController = new PersonController()

const router = Router();

router.get("/", personController.index);
router.get("/:id", personController.show);
router.post("/", personController.create);
router.put("/", personController.update);
router.delete("/:id", personController.delete);

export default router;
