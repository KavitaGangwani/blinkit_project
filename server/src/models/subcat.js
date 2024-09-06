const mongoose = require('mongoose');

const SubcategorySchema =  new mongoose.Schema({
    categoryName : {
       
          type: mongoose.Schema.Types.ObjectId,
          ref : ('categories')

    },
    Subcategory : {
           type : String,
           required: true

    },
    SubcategoryStatus : Boolean
     
})

const subcategoryModel = mongoose.model('subcategories',SubcategorySchema)
module.exports = subcategoryModel;