import { pool } from "../../config/mysql-config.js";

export async function addBrand(brandName) {
  await pool.query("INSERT INTO brand VALUES (?, ?)", [null, brandName]);
}

export async function getBrand() {
  try {
    const [rows] = await pool.query("SELECT * FROM brand");
    return rows;
  } catch (error) {
    console.log(error);
  }
}

export async function getLastBrandId() {
  try {
    const [rows] = await pool.query("SELECT MAX(id) maxid FROM brand");
    return rows;
  } catch (error) {
    console.log(error);
  }
}
