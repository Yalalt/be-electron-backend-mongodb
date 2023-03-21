import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongo-connection.js";
import colors from "colors";

dotenv.config({ path: "./config/config.env" });

const app = express();

import product from "./routes/product.js";
import users from "./routes/users.js";
import categories from "./routes/categories.js";
import specification from "./routes/specification.js";
import wishlist from "./routes/wishlist.js";
import imageRouter from "./routes/imageUpload.js";
import cloudinary from "./config/cloudinary.js";
// New create
// import moderator from "./routes/moderator.js";
// import orders from "./routes/orders.js";

app.use(cors());
app.use(express.json());

app.use("/api", product);
app.use("/api", users);
app.use("/api", categories);
app.use("/api", specification);
app.use("/api", wishlist);
app.use("/uploads", express.static("products"));

// const requestTime = function(req, res, next) {
//   req.requestTime = Date.now();
//   console.log("request time: ", new Date(req.requestTime).toISOString().slice(0,19));
// }

// app.use(requestTime);

app.post("/uploads", imageRouter);

// const ress = cloudinary.v2.uploader.upload("products/corgi_picture_download_hq_Medium.png", {
//   folder: "product",
//   use_filename: true,
// });

// ress.then((data) => {
//   console.log(data);
//   console.log(data.secure_url);
// })
// .catch((err) => {
//   console.log(err);
// });

const conn = await connectDB();

conn.on("error", (error) => console.log(error));
conn.once("open", () => console.log("Connected to MongoDB"));

console.log(colors.red.underline(`MongoDB Connection Status: host:=>>> ${conn.host}`));

app.get("/api", (req, res) => {
  res.json({ message: "Welcome Electronic shops API" });
});

const server = app.listen(process.env.PORT || 3090, () =>
  console.log(colors.yellow(`Server is runnig port ${process.env.PORT}`))
);

process.on("unhandledRejection", (err, promise) => {
  console.log(colors.red(`Алдаа гарлаа ${err.message}`));
  server.close(() => process.exit(1));
});
