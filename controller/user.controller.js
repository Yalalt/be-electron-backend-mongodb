import {
  createUser,
  getUserById,
  getUsers,
  getWishlistUserList,
  removeUser,
  getUsersLimit,
} from "../model/services/user-service.js";

import { UserModel } from "../model/all.model.js";
import bcrypt from "bcrypt";


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

// REGISTER check
export const userRegister = async (req, res) => {
  const data = req.body;
  if (data) {
    const oldUser = await UserModel.findOne({ email: data.email });

    if (oldUser) {
      return res.status(400).json({
        success: false,
        status: "Хэрэглэгч аль хэдийн үүссэн байна. Нэвтэрч орно уу.",
      });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    data.password = hashedPassword;

    UserModel.create(data)
      .then((data) => {
        res.status(201).json({
          message: "Хэрэглэгч амжилттай үүслээ",
          data,
        });
        return;
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          error: error,
        });
      });
  } else {
    return res.json({
      error: "Нууц үгээ оруулаагүй байна.",
    });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).res.json({
        success: false,
        status: "Утгуудаа бүрэн оруулна уу.",
        updated: 1,
        email: email,
        password: password,
      });
      return;
    }
    const user = await UserModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.PRIVATEKEY,
        {
          expiresIn: "2h",
        }
      );

      res.status(200).json({
        success: true,
        status: "Амжилттай нэвтэрлээ",
        data: user,
        token: token,
      });
      return;
    }

    res.status(400).json({
      success: false,
      status: "Нууц үг нэр хоорондоо таарахгүй байна.",
    });
    return;
  } catch (err) {
    console.log(err);
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
