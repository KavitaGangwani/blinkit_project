const express = require('express');
const router = express.Router();
const {userOTP,userLogin} = require('./../controllers/userlogin_c.js')

console.log('happy.from user route')
const userOTPRoute = router.post('/generateotp',userOTP );
const userLoginRoute = router.post('/loginotp',userLogin );
module.exports = {userOTPRoute,userLoginRoute}