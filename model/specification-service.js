import { pool } from "../config/mysql-config.js";

export const addSpecification = async (specification) => {
  try {
    const { prodId, property, value } = specification;
    const result = await pool.query("INSERT INTO specification VALUES (?, ?, ?, ?)", [
      null,
      prodId,
      property,
      value,
    ]);
  
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const getSpecification = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM specification");
    return rows;
  } catch (error) {
    console.log(error);
  }
}
