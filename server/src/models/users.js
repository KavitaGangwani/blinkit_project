const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userMail : {
        type : String,
        unique : true,
        required : true
    },
    cartItems: Number,
    orderHistory : Number,
    adress: String
})

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;