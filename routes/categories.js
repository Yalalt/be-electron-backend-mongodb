import express from "express";
import {
  getAll,
  getOne,
  create,
  getCatByLimit,
  updateCat,
  deleteCat,
} from "../controller/category.controller.js";

const router = express.Router();

router.get("/category", getAll);
router.get("/category/:id", getOne);
router.get("/category/limit?", getCatByLimit);
router.post("/category", create);
router.put("/category/:id", updateCat);
router.delete("/category/:id", deleteCat);

export default router;
