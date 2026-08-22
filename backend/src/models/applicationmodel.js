const { default: mongoose } = require("mongoose");

const applicationschema= mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'job',
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    resume:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        status:{
            enum:[
                'applied',
                'under-review',
                'shortlisted',
                'rejected',
                'hired'
            ],
            default:'applied'
        }
    }
})
const applicationmodel= mongoose.model('application',applicationschema)
module.exports= applicationmodel