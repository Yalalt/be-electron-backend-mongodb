import express from "express";
import {
  getAll,
  getLimitProducts,
  getProductsMaxPrice,
  create,
  getOne,
  getProductByCategory,
  getProductByBrand,
  deleteProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/product", getAll);
router.get("/product/:id", getOne);
router.get("/product/category/?", getProductByCategory);
router.get("/product/brand/?", getProductByBrand);
// /product/limit?prod_n
router.get("/product/limit?", getLimitProducts);
router.get("/product/maxprcprod", getProductsMaxPrice);
router.post("/product", create);
router.delete("/product/:id", deleteProduct);

export default router;
