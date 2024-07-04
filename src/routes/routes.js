import { Router } from "express";
import PersonController from "../controller/PersonController.js"
const personController = new PersonController()

const router = Router();

router.get("/", (req,res)=>{
  res.json({
    statusCode: 200,
    message: "API rodando"
  })
})

router.get("/person", personController.index);
router.get("/person/:id", personController.show);
router.post("/", personController.create);
router.put("/person", personController.update);
router.delete("/:id", personController.delete);

export default router;
