const express = require("express");
const cors = require("cors");

const app = express();

require("./models/db");
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter")

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRouter);
app.use("/products", productRouter);

module.exports = app;