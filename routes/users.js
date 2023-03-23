import express from "express";
import {
  getAll,
  create,
  getUsersLimits,
  getUserWishlist,
  getUser,
  deleteUser,
  userRegister,
  userLogin,
} from "../controller/user.controller.js";

const router = express.Router();


router.route("/user").get(getAll).post(create);
router.post("/user/register", userRegister);
router.post("/user/login", userLogin);
router.get("/user/:id", getUser);
router.get("/user/limit?", getUsersLimits);
router.get("/user/uwl/:id", getUserWishlist);
router.delete("/user/:id", deleteUser);

export default router;
