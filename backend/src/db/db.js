const mongoose= require('mongoose')
const connectdb= async()=>{
    await mongoose.connect(process.env.DB_URI)
    console.log('connected to database')
}
module.exports= connectdb