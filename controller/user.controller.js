import {
  createUser,
  getUserById,
  getUsers,
  getWishlistUserList,
  removeUser,
  getUsersLimit,
} from "../model/user-service.js";

export const getAll = async (req, res) => {
  console.log("All user request received");
  try {
    const result = await getUsers();
    console.log(result);

    if (result.length > 0) {
      res.json({ status: true, result });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

// getUsersLimit create service
export const getUsersLimits = async (req, res) => {
  // path/limit?limit='10003'
  const { limit } = req.query;
  console.log("Limit user request received");

  try {
    const result = await getUsersLimit(limit);
    console.log(result);

    if (result.length > 0) {
      res.json({ status: true, result });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const getUserWishlist = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.json({ status: false, message: "Wishlist not found" });

  try {
    const result = await getWishlistUserList(id);

    if (!result)
      return res.json({
        status: false,
        message: "Not found users with wishlist.",
      });

    res.json({
      status: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  // const { query } = req;
  // const userID = query.id;
  if (!id) return res.json({ status: false, message: "User not found" });

  try {
    const result = await getUserById(id);
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const create = async (req, res) => {
  console.log("User ADD 0_0 /");

  const {
    name,
    role,
    password,
    email,
    contact,
    address1,
    address2,
    user_image,
  } = req.body;

  const newUser = {
    name,
    role,
    password,
    email,
    contact,
    address1,
    address2,
    user_image,
  };

  // id <-----deleted, name, role, password, email, contact, address1, address2, userImage, userDate
  try {
    const result = await createUser(newUser);
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.json({ status: false, message: "User not found" });

  try {
    const result = await removeUser(id);

    if (result && result[0].affectedRows > 0) {
      return res.json({ status: true, message: "Success" });
    } else {
      return res.json({ status: false, message: "Not deleted user..." });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};
