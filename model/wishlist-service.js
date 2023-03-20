import { pool } from "../config/mysql-config.js";

export const addWishList = async (userId, prodId) => {
  await pool.query("INSERT INTO wishlist VALUES (?, ?, ?)", [
    null,
    userId,
    prodId,
  ]);
}

export const getWishList = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM wishlist");
    return rows;
  } catch (error) {
    console.log(error);
  }
}
