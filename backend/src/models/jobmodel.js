const { default: mongoose } = require("mongoose");

const jobschema= mongoose.Schema({
    title:{
        required:true,
        type:String,
        trim:true
    },
    company:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    salary:{
        type:String,
        required:true,
        trim:true
    },
    jobtype:{
        type:String,
        required:true,
        trim:true
    },
    skills:{
        type:[String],
        required:true,   
    },
    recruiter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
}
})
const jobmodel= mongoose.model('job',jobschema)
module.exports= jobmodel