require("dotenv").config();
const app = require("./app");

PORT = process.env.PORT || 8081;

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})