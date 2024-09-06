const userModel = require('./../models/users.js');
const details = require('./../../details.js');
const nodemailer = require('nodemailer')
const storeOtp = new Map()

// TRANSPORTER FOR NODEMAILER
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: details.email,
        pass: details.pass
    }
})


const userOTP = async (req, res) => {
    const userMail = req.body.email;

    const otp = Math.floor(Math.random() * 900 * 10)
    console.log(otp, userMail);
    storeOtp.set(userMail,otp.toString())



    const options = {
        from: details.email,
        to: userMail,
        subject: 'OTP for Login',
        text: `Your OTP is ${otp}`
    }

// TRANSPORTER
    transporter.sendMail(options, (error, info) => {
        console.log(error)
        if (error) return res.status(500).json({ status: false, message: 'something went wrong' })

        res.status(200).json({ message: 'otp generated', otp: otp })
    })

}

const userLogin = async(req,res)=>{
    const mail = req.body.email
    const otpentered = req.body.otp

    const storedOTP = storeOtp.get(mail)

    if(otpentered !== storedOTP) return res.status(500).json({ status: false, message: 'OTP doesnt match' })

        res.status(200).json({status:true, message: 'matched' })

}

module.exports = {userOTP,userLogin}