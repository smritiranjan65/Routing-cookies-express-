const { Router } = require("express");
const router = Router();

products = [
    {
        id: 1,
        name: "shirts",
        price: 1000
    },
    {
        id: 2,
        name: "shoes",
        price: 2200
    },
    {
        id: 1,
        name: "pants",
        price: 2200
    },
];

router.get('/', (req,res) => {
    res.send(products);
});

module.exports = router