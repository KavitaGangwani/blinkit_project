const express = require('express');
const {addSubCat,viewSubCat,SubCatbyCat,updateSubCat,deleteSubCat,SubCatbySub} = require('../controllers/subcategory_c.js');

const router = express.Router();

console.log('happy.from subcategory route')

const addSubCatRoute = router.post('/addSubCat',addSubCat);
const viewSubCatRoute = router.get('/viewSubCat',viewSubCat)
const SubCatbyCatRoute = router.get('/viewSubCat/:byCat',SubCatbyCat)
const SubCatbySubRoute = router.get('/viewSubCatbysub/:bySub',SubCatbySub)
const updateSubCatRoute = router.put('/updateSubCat/:subname',updateSubCat)
const deleteSubCatRoute = router.delete('/deleteSubCat/:subname',deleteSubCat)


module.exports = {addSubCatRoute,viewSubCatRoute,SubCatbyCatRoute,updateSubCatRoute,deleteSubCatRoute,SubCatbySubRoute}
