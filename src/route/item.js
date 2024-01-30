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
    // setting cookies
    res.cookie("token", "test", {maxAge: 5000});
    res.send(products);
});

router.get('/:price', (req,res) => {
    const price = req.params.price;
    product = products.find((p) => p.price== price)
    res.send(product);
});



module.exports = router