const mongoose = require('mongoose');

const EarphonesSchema = mongoose.Schema([
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price:String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price:String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price:String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price:String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price:String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price:String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price:String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price:String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price:String,
        colour:String,
        description:String
    },
    {
        id:Number,
        category:String,
        type:String,
        brand:String,
        latest:Boolean,
        name:String,
        imgUrl:String,
        price:String,
        colour:String,
        description:String
    }
])

const EarphonesModel = new mongoose.model('Earphones', EarphonesSchema);

module.exports = EarphonesModel;