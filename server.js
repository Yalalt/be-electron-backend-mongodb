import express from "express";
import cors from "cors";
const app = express();

const PORT = 3008;

import product from "./routes/product.js";
import users from "./routes/users.js";
import categories from "./routes/categories.js";
import specification from "./routes/specification.js";
import wishlist from "./routes/wishlist.js";
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
// app.use("/api", );
// app.use("/api", );


app.get("/api", (req, res) => {
    res.json({ message: "Welcome Electronic shops API"});
})

app.listen(PORT, () => console.log("Service is runnig port " + PORT));