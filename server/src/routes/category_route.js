const express = require('express');
const  {addCat,viewCat, byCatName, catTrue, byCatId,updateCat,deleteCat} = require('../controllers/category_c.js');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage });

const router = express.Router();

console.log('happy.from category route')

const addCatRoute = router.post('/addCat', upload.single('categoryImage'),addCat );
const viewCatRoute = router.get('/viewCat',viewCat)
const byCatNameRoute = router.get('/viewCat/:catName',byCatName )
const byCatIdRoute = router.get('/viewCatid/:catId',byCatId)
const catTrueRoute = router.get('/viewCattrue',catTrue )
const updateCatRoute = router.put('/updateCat/:id',upload.single('categoryImage'),updateCat)
const deleteCatRoute = router.delete('/deleteCat/:id',deleteCat)

module.exports = {addCatRoute,viewCatRoute,byCatNameRoute,byCatIdRoute,catTrueRoute,updateCatRoute,deleteCatRoute}
