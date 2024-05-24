// IMPORTING REQUIRED THINGS
const express = require('express');
require('./config.js');
const cors = require('cors')
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer')
const multer = require('multer');
const adminModel = require('./models/admin.js');
const userModel = require('./models/users.js')
const categoryModel = require('./models/category.js')

// INTIALISING EXPRESS
const app = express();

app.use(cors());
// TO CONVERT SENT CODE TO SERVER IN READABLE FORMAT FOR SERVER
app.use(express.json());
// app.use(bodyParser.json()); // for JSON data


const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'uploads')
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + file.originalname)
    }
})
const upload = multer({storage:storage});

// CREATING PORT 
const port = 4001;
app.listen(port, ()=>{
    console.log(`we are on port ${port}`)
})

// DETAILS OBJECT

const details = require('./details.js')
console.log(details)
// TRANSPORTER FOR NODEMAILER
const transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user : details.email,  // changer are here **************
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
