import express from "express";
import { CardController } from "../controllers/cardController.js";

const router = express.Router();

router.get("/", CardController.getAll);
router.get("/:id", CardController.getById);
router.post("/", CardController.create);
router.put("/:id", CardController.update);
router.delete("/:id", CardController.remove);

export default router;
