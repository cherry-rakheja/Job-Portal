const usermodel= require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt= require('jsonwebtoken')
const sendmail= require('../utils/sendmail')
const sendotp = require('../utils/sendmail')
const registeruser= async(req,res)=>{
    const {username,email,password,role}= req.body
    const isUserAlreadyExist= await usermodel.findOne({
        email
    })
    if(isUserAlreadyExist){
        return res.status(409).json({message:'User already exists'})
    }
    const hash= await bcrypt.hash(password,10)
    const user= await usermodel.create({
        username,email,password:hash,role
    })
    const acesstoken= jwt.sign({id:user._id,role:user.role}
        ,process.env.JWT_SECRET,
        {expiresIn:'15m'}
    )
    const refreshtoken=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET2 ,{expiresIn:"7d"})
    res.cookie('reftoken',refreshtoken,{
        httpOnly:true,
        secure:true,
        sameSite:'strict'
    })
    res.status(201).json({
        message:'User sucessfully registered',user,acesstoken
    })

}
const generatetoken= async(req,res)=>{
    const refreshtoken= req.cookies.reftoken
    if(!refreshtoken){
        return res.status(401).json({message:'refresh token not found'})
    }
    try {
        const decoded= jwt.verify(refreshtoken,process.env.JWT_SECRET2)
    const acesstoken= jwt.sign({id:decoded.id,role:decoded.role},process.env.JWT_SECRET,{
        expiresIn:"15m"
    })
    res.status(200).json({message:'acess token generated', acesstoken})
    } catch (error) {
        console.log(error)
        res.status(401).json({message:'unauthorized'})
    }
    
    
}
const loginuser=async(req,res)=>{
    const {email,password}= req.body;
    const user= await usermodel.findOne({
        email
    })
    if(!user){
       return res.status(404).json({message:'User not found'})
    }
    const isPasswordCorrect= await bcrypt.compare(password,user.password)
    if(!isPasswordCorrect){
        return res.status(401).json({message:'invalid credentials'})
    }
    const acesstoken= jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'15m'})
    const refreshtoken= jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET2,{expiresIn:"7d"})
    res.cookie('reftoken',refreshtoken,{
        httpOnly:true,
        secure:false,
        sameSite:'strict'
    })
    res.status(200).json({message:'loggedin sucessfully',acesstoken,user:{
        username:user.username,email:user.email,role:user.role
    }})
    
} 
const userprofile= async(req,res)=>{
    const user= await usermodel
    .findById(req.user.id)
    .select('-password')
    res.status(200).json({message:'user fetched sucessfully',user})
}
const updateprofile= async(req,res)=>{
    const user= await usermodel.findByIdAndUpdate(req.user.id , req.body,{
        new:true,
        runValidators:true,
    }).select('-password')
    res.status(200).json({message:'user profile updated sucessfully',user})

}
const deleteprofile= async(req,res)=>{
    const user= await usermodel.findByIdAndDelete(req.user.id)
    res.status(200).json({message:'user deleted sucesfully'})
}
const logoutuser= async(req,res)=>{
    res.clearCookie('reftoken',{
        httpOnly:true,
        sameSite:'strict',
        secure:true,
    })
    res.status(200).json({message:'user logged out sucessfully'})
}
const forgotpassword= async(req,res)=>{
    try {

    
        const { email } = req.body

        const user = await usermodel.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }
        const otp = Math.floor(
            100000 + Math.random() * 900000
        )
        console.log("OTP:", otp)
        console.log("EMAIL:", email)
        console.log("OTP EMAIL SENT")
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000)
        user.resetOTP = otp
        user.resetOTPExpires = otpExpiry
        await user.save()

        await sendotp(email, otp)

        res.status(200).json({message: 'OTP sent successfully'
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: 'Failed to send OTP'
        })
    }
}
const verifyOTP = async (req, res) => {

    try {

        const { email, otp } = req.body

        const user = await usermodel.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }

        // Check OTP
        if (String(user.resetOTP) !== String(otp)) {
    return res.status(400).json({
        message: 'Invalid OTP'
    })

}

        // Check expiry
        if (user.resetOTPExpires < new Date()) {
            return res.status(400).json({
                message: 'OTP expired'
            })
        }

        res.status(200).json({
            message: 'OTP verified successfully'
        })
        console.log("OTP FROM FRONTEND:", otp)
console.log("OTP FROM DATABASE:", user.resetOTP)
console.log("FRONTEND TYPE:", typeof otp)
console.log("DATABASE TYPE:", typeof user.resetOTP)

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

module.exports= {logoutuser, verifyOTP,forgotpassword,registeruser,generatetoken,loginuser,userprofile,updateprofile,deleteprofile}