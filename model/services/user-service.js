import { pool } from "../../config/mysql-config.js";

export const createUser = async (user) => {
  const {
    name,
    role,
    password,
    email,
    contact,
    address1,
    address2,
    userImage,
  } = user;

  let registerDate = new Date()
    .toISOString()
    .slice(0, 10)
    .concat(" ", new Date().toISOString().slice(11, 19));

  await pool.query("INSERT INTO user VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
    null,
    name,
    role,
    password,
    email,
    contact,
    address1,
    address2,
    userImage,
    registerDate,
  ]);
}

export const getUserById = async (userId) => {
  try {
    const [rows] = await pool.query("SELECT * FROM user WHERE id = ?", userId);
    return rows;
    // return rows[0];
  } catch (error) {
    console.log(error);
  }
}

export const getUsers = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM user");
    return rows;
  } catch (error) {
    console.log(error);
  }
}

export const getUsersLimit = async (lim) => {
  try {
    const [rows] = await pool.query("SELECT * FROM user LIMIT ?", lim);
    return rows;
  } catch (error) {
    console.log(error);
  }
}

export const getWishlistUserList = async (uid) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM user RIGHT JOIN wishlist ON user.id = wishlist.user_id WHERE user.id = ?", uid
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
}

export const removeUser = async (userId) => {
  const [rows] = await pool.query("DELETE FROM user WHERE id = ?", userId);
  return rows;
}
