const express = require("express");
const cors = require("cors");

const app = express();

require("./models/db");
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter")

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/ping', (req, res) => {
    res.send('PONG');
});
app.use("/auth", authRouter);
app.use("/products", productRouter);

module.exports = app;