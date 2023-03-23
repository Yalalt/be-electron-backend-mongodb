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
router.route("/product/:id").get(getOne).delete(deleteProduct);
// Service deer to check uri fix
router.get("/product/category/?", getProductByCategory);
router.get("/product/brand/?", getProductByBrand);
// /product/limit?prod_n
router.get("/product/limit?", getLimitProducts);
router.get("/product/maxprcprod", getProductsMaxPrice);


export default router;
