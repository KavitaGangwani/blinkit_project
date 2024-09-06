const mongoose = require('mongoose');

const categorySchema =  new mongoose.Schema({
    categoryName : {
        type : String,
        required : true
    },
    categoryImage : {
        type : String,
        unique : true,
        required : true
    },
    categoryStatus : Boolean,
   
     
})

const categoryModel = mongoose.model('categories',categorySchema);
module.exports = categoryModel;