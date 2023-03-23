import { pool } from "../../config/mysql-config.js";

export async function addCategory(cat) {
  const { name } = cat;
  try {
    const [result] = await pool.query("INSERT INTO category VALUES (?, ?)", [
      null,
      name,
    ]);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategory() {
  try {
    const [rows] = await pool.query("SELECT * FROM category");
    return rows;
  } catch (error) {
    console.log(error);
  }
}

export async function getOneCat(catId) {
  try {
    const [rows] = await pool.query("SELECT * FROM category WHERE id  = ?", catId);
    return rows;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategoryLimit(limit) {
  try {
    if (limit) {
      const [rows] = await pool.query(
        "SELECT * FROM category ORDER BY id DESC LIMIT ?",
        limit
      );
      return rows;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateCategory(categoryId, updateData) {
  console.log(updateData);
  console.log(categoryId);

  let [result] = "";
    for (let i = 0; i < Object.keys(updateData).length; i++) {
      result = await pool.query(
        `UPDATE category SET ${Object.keys(updateData)[i]} = '${
          Object.values(updateData)[i]
        }' WHERE id = ${categoryId}`
      );
    }
  return result;
}

export async function deleteCategory(categoryId) {
  const [result] = await pool.query(
    `DELETE FROM category WHERE id = ${categoryId}`
  );

  return result;
}
