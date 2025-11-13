const ensureAuthenticated = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", ensureAuthenticated,(req,res)=>{
    res.status(200).json(
        [
            {
                name: "mobile",
                price: 50000
            },
            {
                name: "television",
                price: 60000
            }
        ]
    )
});

module.exports = router;