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

// DETAILS OBJECT

const details = require('./details.js')
console.log(details)
// TRANSPORTER FOR NODEMAILER
const transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        email : details.email,
        pass : details.pass
    }
})



//   //  CREATING ROUTES //   //

// 1.   admin login route
app.post('/login',async (req,res)=>{
    // const data = req.body;
    const {admin_name,password} = req.body;
    console.log(admin_name,password)

    // we have to check that the data entered by admin is same as present in database
    // we use try catch and make the function as async function

    try {
        // finding in model matching with database key to key in the schema(destructured object key)
        const userData = await adminModel.find({admin:admin_name});
        // console.log(userData);
        console.log('api called')

        // in case there is no such user
        if(userData.length===0){
            return res.status(404).json({
                status:false,
                message : "user not found"
        
            })
        }
        // matching with the password
        if(userData[0].password!== password){
            return res.status(501).json({
                status:false,
                message : "password doesnt match"
        
            })
        }
        res.status(200).json({
            status:true,
            message : "user found/pass matched log in successful "
    
        })

        
    } catch (err) {
        res.status(500).json({
            status:false,
            message:'internal server error'
        })
        
    }
   
})

//2. user login route
app.post('/generateotp', async(req,res)=>{
    const userMail = req.body.email;

    const otp = Math.floor(Math.random()*900*10)
    console.log(otp, userMail);

   

    const options = {
        from : details.email,
        to : userMail,
        subject : 'OTP for Login',
        text : `Your OTP is ${otp}`
    }

transporter.sendMail(options,(error,info)=>{
    console.log(error)
        if(error) return res.status(500).json({status:false,message:'something went wrong'})

        res.status(200).json({message:'otp generated',otp:otp})    
    })

}) 

// ADD CATEGORY  ROUTE 
app.post('/addCat',upload.single('categoryImage'),async(req,res)=>{

    let data =  req.body;
    console.log(req.file, data)
    let categoryImage =  req.file.filename
    

    const newCat = new categoryModel({
        categoryName : data.categoryName,
        categoryImage,
        categoryStatus : data.categoryStatus==='true'
    })
    try {

        const response = await newCat.save()
        console.log(response)

        res.status(200).json({status:true,message:'add category api'})
        
    } catch (error) {

        res.status(500).json({status:false , message:'Something went wrong'})
        
    }

    

})

// VIEW CATEGORY ROUTES
app.get('/viewCat',async(req,res)=>{


    try {

        const categories = await categoryModel.find()
        categories.map((cat)=>{
           ({...cat._doc,categoryImage : `${req.protocol}://${req.get('host')}/uploads/ `})
        })
        res.status(200).json({status:true,message:'view category', data: categories})
        
    } catch (error) {
        res.status(500).json({status:false , message:'Something went wrong'})
    }

})
// VIEW CATEGORY BY ITS NAME
app.get('/viewCat/:catName',async(req,res)=>{

    let catName = req.params.catName
    console.log(req.params.catName)

    try {

        const categories = await categoryModel.findOne({categoryName : catName})
        res.status(200).json({status:true,message:'view category', data: categories})
        
    } catch (error) {
        res.status(500).json({status:false , message:'Something went wrong'})
    }

})


// ADD SUBCATEGORY ROUTE
app.post('/addSubCat',)
