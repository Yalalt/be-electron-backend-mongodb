import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongo-connection.js";
import colors from "colors";

dotenv.config({ path: "./config/.env" });

const app = express();
const conn = await connectDB();

import product from "./routes/product.js";
import users from "./routes/users.js";
import categories from "./routes/categories.js";
import specification from "./routes/specification.js";
import wishlist from "./routes/wishlist.js";
import imageRouter from "./routes/imageUpload.js";
import cloudinary from "./config/cloudinary.js";
import auth from "./middleware/auth.js";
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
app.use(imageRouter);
app.use("/uploads", express.static("products"));
app.get("/api", (req, res) => {
  res.json({ message: "Welcome Electronic shops API" });
});

app.post("/protected", auth, (req, res, next) => {
  res.status(200).json({
    data: "successful got the protected route",
  });
});

app.post("/unprotected", (req, res, next) => {
  res.status(200).json({
    data: "successful got the unprotected route",
  });
});

// MONGO DB error handler
conn.on("error", (error) => console.log(error));
conn.once("open", () => console.log("Connected to MongoDB"));

console.log(
  colors.red.underline(`MongoDB Connection Status: host:=>>> ${conn.host}`)
);

const server = app.listen(process.env.PORT || 3090, () =>
  console.log(colors.yellow(`Server is runnig port ${process.env.PORT}`))
);

process.on("unhandledRejection", (err, promise) => {
  console.log(colors.red(`Алдаа гарлаа ${err.message}`));
  server.close(() => process.exit(1));
});
