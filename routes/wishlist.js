import express from "express";
import {
  createWishlist, getWishLists
} from "../controller/wishlist.controller.js";

const router = express.Router();

router.get("/wishlist", getWishLists);
router.post("/wishlist", createWishlist);

export default router;
