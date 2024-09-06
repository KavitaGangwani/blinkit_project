const express = require('express');
const router = express.Router();
const adminLogin = require('./../controllers/admin_c.js')

console.log('happy.from admin route')
const adminRoute = router.post('/login',adminLogin);
module.exports = adminRoute