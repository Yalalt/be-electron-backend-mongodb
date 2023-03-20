import express from "express";
import cors from "cors";
import db from "./config/mongo-connection.js";


const app = express();
const PORT = 9000;

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


const mylogger = function(req, res, next) {
  console.log("Log log ....");
  next();
}

app.use(mylogger);

const requestTime = function(req, res, next) {
  req.requestTime = Date.now();
  console.log("request time: ");
}

app.use(requestTime);

app.post("/uploads", imageRouter);

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to MongoDB"));

app.get("/api", (req, res) => {
  res.json({ message: "Welcome Electronic shops API" });
});

app.listen(PORT || 3090, () => console.log("Service is runnig port " + PORT));
