import {
  addCategory,
  getCategory,
  getCategoryLimit,
  updateCategory,
  deleteCategory,
  getOneCat,
} from "../model/services/category-service.js";

export const getAll = async (req, res) => {
  try {
    const result = await getCategory();
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const getOne = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.json({ status: false, message: "cate not found" });
    
    try {
      const result = await getOneCat(id);
  
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  };

export const getCatByLimit = async (req, res) => {
  const { query } = req;
  try {
    const result = await getCategoryLimit(query.cat_no);
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const create = async (req, res) => {
  console.log("Create Category huselt");
  const { name } = req.body;

  try {
    const result = await addCategory(name);
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const updateCat = async (req, res) => {
  console.log("Create Category huselt");
  const { id } = req.params;
  const { name } = req.body;
  const updateCateData = { categoryId: id, updateData: name };

  try {
    const result = await updateCategory(updateCateData);
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const deleteCat = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.json({ status: false, message: "Category not found" });

  try {
    const result = await deleteCategory(categoryId);

    if (result && result[0].affectedRows > 0) {
      return res.json({ status: true, message: "Success" });
    } else {
      return res.json({ status: false, message: "Error" });
    }
  } catch (error) {
    res.json({ status: false, message: err });
  }
};
