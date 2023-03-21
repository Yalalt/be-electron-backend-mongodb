import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        _id: {}
    }
    ,{
        collection: "products"
    });