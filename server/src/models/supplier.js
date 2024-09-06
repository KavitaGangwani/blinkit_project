const mongoose = require('mongoose');

const supplierSchema =  new mongoose.Schema({
    supplierName : String,
    
    supStatus : Boolean
     
})

const supplierModel = mongoose.model('suppliers',supplierSchema)
module.exports = supplierModel;