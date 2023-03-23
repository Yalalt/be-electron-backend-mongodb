import { addWishList, getWishList } from "../model/services/wishlist-service.js";

export const createWishlist = async (req, res) => {
  console.log("Add wishlist huselt irlee");
  const { userId, prodId } = req.body;
  try {
    const result = await addWishList(userId, prodId);
    console.log(result);

    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const getWishLists = async (req, res) => {
  try {
    const result = await getWishList();
    res.send({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};
