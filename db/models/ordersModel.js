const mongoose = require('mongoose');

const OrdersSchema = mongoose.Schema([
    {
        id: Number,
        brand: String,
        name: String,
        imgUrl: String,
        price: String,
        email: String,
        address: String
    }
])

const OrderModel = new mongoose.model('Orders', OrdersSchema);

module.exports = OrderModel;