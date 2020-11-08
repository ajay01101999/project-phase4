const express = require('express');
const OrdersModel = require('../db/models/ordersModel');

const router = express.Router();

router.post('/', (req, res)=>{
    console.log(req.body);
    const product = req.body;
    console.log(product)
    //OrdersModel.create({product})
})

module.exports = router;