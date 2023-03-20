import express from "express";
import {
  getAll,
  create,
  getUsersLimits,
  getUserWishlist,
  getUser,
  deleteUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.get("/user", getAll);
router.get("/user/:id", getUser);
router.get("/user/limit?", getUsersLimits);
router.get("/user/uwl/:id", getUserWishlist);
router.post("/user", create);
router.delete("/user/:id", deleteUser);

export default router;
