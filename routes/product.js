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

router.route("/product").get(getAll).post(create);
// Service deer to check uri fix
router.get("/product/category/?name=", getProductByCategory);
router.route("/product/:id").get(getOne).delete(deleteProduct);
router.get("/product/brand?", getProductByBrand);
// /product/limit?prod_n
router.get("/product/limit?", getLimitProducts);
router.get("/product/maxprcprod", getProductsMaxPrice);


export default router;
