const express = require('express');
const  {addSupplier,viewSupp,viewSupName,viewSupTrue} = require('../controllers/supplier_c.js');


const router = express.Router();

console.log('happy.from supplier route')

const addSupRoute = router.post('/addSup', addSupplier )
const viewSupRoute = router.get('/viewSup', viewSupp )
const bySupNameRoute = router.get('/viewSup/:supName', viewSupName)
const supTrueRoute = router.get('/viewSuptrue',viewSupTrue )

module.exports = {addSupRoute,viewSupRoute,bySupNameRoute,supTrueRoute}