const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    admin_name :{
        type : String,
        unique : true,
        required : true
    },
    password :{
        type : String,
        unique : true,
        required : true
    }
})

const adminModel = mongoose.model("admin",adminSchema);
module.exports = adminModel;