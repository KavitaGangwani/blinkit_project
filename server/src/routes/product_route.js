const express = require('express');
const  {addprod,viewProd, byProdName, prodTrue,updateProd,deleteProd} = require('../controllers/product_c.js');
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

console.log('happy.from prod route')

const addProdRoute = router.post('/addProd', upload.any(),addprod);
const viewProdRoute = router.get('/viewprod',viewProd)
const byProdNameRoute = router.get('/viewProd/:prodName',byProdName )
const prodTrueRoute = router.get('/viewProdtrue',prodTrue )
const updateProdRoute = router.get('/updateProd', upload.any(),updateProd)
const deleteProdRoute = router.delete('/deleteProd/:id',deleteProd)

module.exports = {addProdRoute,viewProdRoute,byProdNameRoute,prodTrueRoute,updateProdRoute,deleteProdRoute}