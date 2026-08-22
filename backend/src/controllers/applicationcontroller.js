const applicationmodel= require('../models/applicationmodel')
const jobmodel= require('../models/jobmodel')
const applyjob= async(req,res)=>{
    const {id}= req.params
    const{resume}= req.body
    const job= await jobmodel.findById(id)
    if(!job){
        return res.status(404).json({message:'job not found'})
    }
    const isAlreadyApplied= await applicationmodel.findOne({
        job:id,
        user:req.user.id
    })
    if(isAlreadyApplied){
        return res.status(409).json({message:'you have already applied for this job'})
    }
    const application= await applicationmodel.create({
        job:id,user:req.user.id,resume
    })
    res.status(201).json({message:'applied sucessfully',application})
}
const getappliedjob= async(req,res)=>{
    const user= req.user.id
    const applications= await applicationmodel.find({
        user
    }).populate('job')
    res.status(200).json({message:'applications fetched sucessfully',applications})
    
}
const updateapplication=async(req,res)=>{
    const {id}= req.params
    const {status}= req.body
    const application= await applicationmodel.findByIdAndUpdate(id,{status},{
        new:true,
        runValidators:true,
    })
    if(!application){
        return res.status(404).json({message:'application not found'})
    }
    res.status(200).json({message:'application status updated sucessfully',application})
}
module.exports={applyjob,getappliedjob,updateapplication}