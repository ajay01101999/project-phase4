const mongoose = require('mongoose');

const GrocerySchema = mongoose.Schema([
    {
        id:Number,
        category:String,
        latest:Boolean,
        type:String,
        name:String,
        imgUrl:String,
        weight:String,
        price:String,
        brand:String,
        about:String,
        benefits:String
    },
    {
        id:Number,
        category:String,
        latest:Boolean,
        type:String,
        name:String,
        imgUrl:String,
        weight:String,
        price:String,
        brand:String,
        about:String,
        benefits:String
    },
    {
        id:Number,
        category:String,
        latest:Boolean,
        type:String,
        name:String,
        imgUrl:String,
        weight:String,
        price:String,
        brand:String,
        about:String,
        benefits:String
    },
    {
        id:Number,
        category:String,
        latest:Boolean,
        type:String,
        name:String,
        imgUrl:String,
        weight:String,
        price:String,
        brand:String,
        about:String,
        benefits:String
    },
    {
        id:Number,
        category:String,
        latest:Boolean,
        type:String,
        name:String,
        imgUrl:String,
        weight:String,
        price:String,
        brand:String,
        about:String,
        benefits:String
    },
    {
        id:Number,
        category:String,
        latest:Boolean,
        type:String,
        name:String,
        imgUrl:String,
        weight:String,
        price:String,
        brand:String,
        about:String,
        benefits:String
    },
    {
        id:Number,
        category:String,
        latest:Boolean,
        type:String,
        name:String,
        imgUrl:String,
        weight:String,
        price:String,
        brand:String,
        about:String,
        benefits:String
    },
    {
        id:Number,
        category:String,
        latest:Boolean,
        type:String,
        name:String,
        imgUrl:String,
        weight:String,
        price:String,
        brand:String,
        about:String,
        benefits:String
    },
    {
        id:Number,
        category:String,
        latest:Boolean,
        type:String,
        name:String,
        imgUrl:String,
        weight:String,
        price:String,
        brand:String,
        about:String,
        benefits:String
    },
    {
        id:Number,
        category:String,
        latest:Boolean,
        type:String,
        name:String,
        imgUrl:String,
        weight:String,
        price:String,
        brand:String,
        about:String,
        benefits:String
    }
])

const GroceryModel = new mongoose.model('Grocery', GrocerySchema);

module.exports = GroceryModel;