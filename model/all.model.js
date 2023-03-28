import mongoose from "mongoose";
import { Schema } from "mongoose";
import { nanoid } from "nanoid";

const UserSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: false,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email хаягаа оруулна уу"],
      unique: [true, "хаягтай хэрэглэгч бүртгэлтэй байна"],
      trim: true,
    },
    address: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      default: "client",
    },
    user_id: {
      type: String,
      default: nanoid(),
    },
    password: {
      type: String,
      required: [true, "Нууц үгээ оруулна уу"],
      unique: false,
      default: "pwds23456",
      minLength: 6,
    },
  },
  {
    collection: "users",
  }
);

const ProductSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
    },
    category: {
      type: String,
    },
    stock: {
      type: Number,
    },
    sale: {
      type: Number,
    },
    image: {
      type: Object,
      required: false,
    },
    prod_id: {
      type: String,
      default: nanoid(),
    },
  },
  {
    collection: "products",
  }
);

const OrderSchema = new Schema({
  _id: Schema.Types.ObjectId,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  prod_id: {
    type: Schema.Types.ObjectId,
    ref: "products",
  },
  order_quantity: {
    type: Number,
    required: false,
  },
  is_paid: {
    type: Number,
  },
  created_date: {
    type: Date,
  },
},{
    collection: "orders"
});

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Категорийн нэрийг оруулна уу"],
      unique: true,
      trim: true,
      maxlength: [
        50,
        "Категорийн нэрийн урт 50 тэмдэгтээс хэтрэхгүй байх ёстой",
      ],
    },
  },
  {
    collection: "category",
  }
);

export const CategoryModel = mongoose.model("Category", CategorySchema, 'category');
export const UserModel = mongoose.model.Users || mongoose.model("Users", UserSchema, 'users');
export const ProductModel = mongoose.model("Products", ProductSchema, 'products');
export const OrderModel = mongoose.model("Orders", OrderSchema, 'orders');
