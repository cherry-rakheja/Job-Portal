const { default: mongoose } = require("mongoose");

const userschema= mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['recruiter','jobseeker'],
        default:'jobseeker'
    },
    resetOTP: {
        type:String,
    },

    resetOTPExpires: Date
})
const usermodel= mongoose.model('user',userschema)
module.exports= usermodel