const nodemailer= require('nodemailer')
const transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})
const sendotp= async(email,otp)=>{
    await transporter.sendMail({
        from:process.env.EMAIL_USER,
        to:email,
        subject: 'JobPortal Password Reset OTP',
        html: `
            <h2>Password Reset</h2>
            <p>Your OTP is:</p>
            <h1>${otp}</h1>
            <p>This OTP is valid for 5 minutes.</p>`
    })
}
module.exports= sendotp