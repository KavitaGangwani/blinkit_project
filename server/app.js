// IMPORTING REQUIRED THINGS
const express = require('express');
require('./config.js');
const cors = require('cors')
const path = require('path')


const multer = require('multer');

const productModel = require('./src/models/product.js')

// IMPOERTING ROUTES
const admin_route = require('./src/routes/admin_route.js')
const {userOTPRoute,userLoginRoute} = require('./src/routes/userlogin_route.js')
const {addCatRoute,viewCatRoute,byCatNameRoute,catTrueRoute, byCatIdRoute, updateCatRoute,deleteCatRoute} = require('./src/routes/category_route.js')
const {addSubCatRoute,viewSubCatRoute,SubCatbyCatRoute,updateSubCatRoute,deleteSubCatRoute,SubCatbySubRoute} = require('./src/routes/subcategory_route.js')
const {addSupRoute,viewSupRoute,bySupNameRoute,supTrueRoute} = require('./src/routes/supplier_route.js')
const {addProdRoute,viewProdRoute,byProdNameRoute,prodTrueRoute,updateProdRoute,deleteProdRoute} = require('./src/routes/product_route.js')

// INTIALISING EXPRESS
const app = express();
app.use(cors());
// TO CONVERT SENT CODE TO SERVER IN READABLE FORMAT FOR SERVER
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json()); 
const uploadspath = app.use('/uploads', express.static(path.join(__dirname, 'uploads')))


// CALLING ROUTES
app.use(admin_route);
app.use(userOTPRoute,userLoginRoute);
app.use(addCatRoute,viewCatRoute,byCatNameRoute,catTrueRoute,byCatIdRoute,updateCatRoute,deleteCatRoute);
app.use(addSubCatRoute,viewSubCatRoute,SubCatbyCatRoute,updateSubCatRoute,deleteSubCatRoute,SubCatbySubRoute);
app.use(addSupRoute,viewSupRoute,bySupNameRoute,supTrueRoute);
app.use(addProdRoute,viewProdRoute,byProdNameRoute,prodTrueRoute,updateProdRoute,deleteProdRoute);


// CREATING PORT 
const port = 4001;
app.listen(port, () => {
    console.log(`we are on port ${port}`)
})







