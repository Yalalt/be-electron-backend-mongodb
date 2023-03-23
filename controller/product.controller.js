import {
  getProductById,
  getProducts,
  getProductByCategoryId,
  getProductByBrandId,
  getMaxPriceComputers,
  createProduct,
  removeProduct,
  getProductsLimit,
} from "../model/services/product-service.js";


export const getOne = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.json({ status: false, message: "Id could not found" });

  try {
    const result = await getProductById(id);
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const getProductByCategory = async (req, res) => {
  const { name } = req.query;
  if (!name) return res.json({ status: false, message: "Category could not found" });

  try {
    const result = await getProductByCategoryId(name);
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const getProductByBrand = async (req, res) => {
  const { name } = req.query;
  if (!name)
    return res.json({ status: false, message: "Brand could not found" });

  try {
    const result = await getProductByBrandId(name);
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const getAll = async (req, res) => {
  try {
    console.log("All Product Huselt orj irlee");
    const result = await getProducts();
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const getLimitProducts = async (req, res) => {
  console.log("All limited product awah huselt");
  const { query } = req;
  try {
    const result = await getProductsLimit(query.prod_no);
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const getProductsMaxPrice = async (req, res) => {
  const { query } = req;
  console.log("Prod query request...");

  try {
    const result = await getMaxPriceComputers();
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const create = async (req, res) => {
  console.log("Request ADD Product");
  try {
    const { name, brandId, categoryId, desc, sale, price, stock, image } =
      req.body;
    const newProduct = {
      name,
      brandId,
      categoryId,
      desc,
      sale,
      price,
      stock,
      image,
    };
    const result = await createProduct(newProduct);
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.json({ status: false, message: "Product id not found" });

  try {
    const result = await removeProduct(prodID);

    if (result && result[0].affectedRows > 0) {
      return res.json({ status: true, message: "controller: Success" });
    } else {
      return res.json({
        status: false,
        message: "controller: ustgahad aldaa garlaa",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};
