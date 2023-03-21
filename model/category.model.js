import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Категорийн нэрийг оруулна уу"],
      unique: true,
      trim: true,
      maxlength: [50, "Категорийн нэрийн урт 50 тэмдэгтээс хэтрэхгүй байх ёстой"],
    },
  },
  {
    collection: "category",
  }
);

export default mongoose.model("Category", CategorySchema);
