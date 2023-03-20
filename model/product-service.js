import { pool } from "../config/mysql-config.js";

export const getProducts = async () => {
  try {
    const [rows] = await pool.query(
      "SELECT prod.id, prod.name, prod.created_date, prod.description, prod.sale, prod.price, prod.stock, prod.image, cat.name AS cat_name, bra.name AS brand_name FROM product prod LEFT JOIN category cat ON prod.category_id = cat.id LEFT JOIN brand bra ON prod.brand_id = bra.id"
    );

    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsLimit = async (limit) => {
  try {
    if (limit) {
      const [rows] = await pool.query(
        "SELECT prod.id, prod.name, prod.created_date, prod.description, prod.sale, prod.price, prod.stock, prod.image, cat.name AS cat_name, bra.name AS brand_name FROM product prod LEFT JOIN category cat ON prod.category_id = cat.id LEFT JOIN brand bra ON prod.brand_id = bra.id limit ?",
        limit
      );

      return rows;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (prodId) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM product WHERE id = ?",
      prodId
    );

    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const getMaxPriceComputers = async () => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM product WHERE price=(SELECT MAX(price) FROM product INNER JOIN category ON product.category_id IN(SELECT id FROM category WHERE id = 1001))"
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const getProductByCategoryId = async (catId) => {
  try {
    if (catId) {
      const [rows] = await pool.query(
        "SELECT prod.id, prod.name, prod.created_date, prod.description, prod.sale, prod.price, prod.stock, prod.image, cat.name AS cat_name, bra.name AS brand_name FROM product prod LEFT JOIN category cat ON prod.category_id = cat.id LEFT JOIN brand bra ON prod.brand_id = bra.id WHERE cat.id = ?",
        catId
      );

      return rows;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductByBrandId = async (brandId) => {
  try {
    if (brandId) {
      const [rows] = await pool.query(
        "SELECT prod.id, prod.name, prod.created_date, prod.description, prod.sale, prod.price, prod.stock, prod.image, cat.name AS cat_name, bra.name AS brand_name FROM product prod LEFT JOIN category cat ON prod.category_id = cat.id LEFT JOIN brand bra ON prod.brand_id = bra.id WHERE bra.id = ?",
        brandId
      );

      return rows;
    }
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (product) => {
  const { name, brandId, categoryId, desc, sale, price, stock, image } =
    product;
  const registerDate = new Date().toISOString().slice(0, 10);
  try {
    const [result] = await pool.query(
      "INSERT INTO product VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        null,
        name,
        brandId,
        categoryId,
        registerDate,
        desc,
        sale,
        price,
        stock,
        image,
      ]
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = async (prodID) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM product WHERE id = ?",
      prodID
    );
    return result;
  } catch (error) {
    console.log("Ustgahad aldaa garlaa.. " + error);
  }
};

export const updateProduct = async () => {};
