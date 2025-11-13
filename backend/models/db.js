const mongoose = require("mongoose");

const mongoUrl = process.env.MONGO_CONN;

mongoose.connect(mongoUrl)
.then(()=>{console.log("database is connected");})
.catch((err)=>{console.log("database connection error: ",err);})