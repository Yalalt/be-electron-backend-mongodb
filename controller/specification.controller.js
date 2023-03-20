import {
  addSpecification,
  getSpecification,
} from "../model/specification-service.js";

export const getAll = async (req, res) => {
  try {
    const result = await getSpecification();
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};

export const create = async (req, res) => {
    console.log("Create Specification huselt");
    
  try {
    const { prodId, property, value } = req.body;
    const specific = { prodId, property, value };

    const result = await addSpecification(specific);
    res.json({ status: true, result });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};
