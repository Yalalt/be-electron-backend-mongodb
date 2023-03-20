import express from "express";
import {
  getAll, create
} from "../controller/specification.controller.js";

const router = express.Router();

router.get("/specification", getAll);
router.post("/specification", create);

export default router;
