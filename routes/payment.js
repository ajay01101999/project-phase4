const express = require('express');

const OrdersModel = require('../db/models/ordersModel');
const stripe = require('stripe')('sk_test_P6CJ9dJxupg5oCbnYLgNCUmt00Unqa8UG0');
const router = express.Router();

router.post('/',(req, res)=>{
    const token = req.body.token;
    const email = token.email;
    const product = req.body.product;
    const price = parseInt(req.body.product.price.replace('₹','').replace(',',''))
    order = {};
    order.email = token.email;
    order.name = product.name;
    order.price = product.price;
    order.imgURL = product.imgURL;
    order.brand = product.brand;
    order.shipping = token.card.address_country;
    order.id = product.id;
    OrdersModel.create(order).then(res=>console.log('created')).catch(err=>console.log('error',err));
    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `ORDER OF ${product.name} HAS PLACED`,
            shipping:{
                name: token.card.name,
                address: token.card.address_country
            }
        })
    }).then(result => {
        const products = OrdersModel.find({email: JSON.parse(email)});
        //JSON.stringify(products);
        res.status(200).send(products);
        // res.status(200).json(result);
    }).catch(err=>console.log(err))
})

module.exports = router;