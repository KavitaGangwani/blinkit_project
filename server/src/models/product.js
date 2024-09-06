const mongoose = require('mongoose');
const categoryModel = require('./category');

const productSchema =  new mongoose.Schema({
    prodName :String,
    price:Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref : ('categories')
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref : ('subcategories')
    },
    quantity :String,
    supplier:{
        type: mongoose.Schema.Types.ObjectId,
        ref : ('suppliers')
    },
    prodDesc : String,
    prodImg : String,
    images: Array,
    prodStatus : Boolean
     
})

const productModel = mongoose.model('products',productSchema)
module.exports = productModel;