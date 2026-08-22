const jobmodel= require('../models/jobmodel')
const applicationmodel= require('../models/applicationmodel')
const jwt= require('jsonwebtoken')
const createjob= async(req,res)=>{
    const {title,company,description,location,salary,jobtype,skills}= req.body
    const job= await jobmodel.create({
        title,company,description,location,salary,jobtype,skills,recruiter:req.user.id
    }) 
    res.status(201).json({message:"job created successfully",job})
}
const editjob= async(req,res)=>{
    const {id}= req.params
    const updatedjob= await jobmodel.findByIdAndUpdate(id,req.body,{
        new:true,
        runValidators:true,
    })
    if(!updatedjob){
        return res.status(404).json({message:'job not found'})
    }
    res.status(200).json({message:'job updated sucessfully',updatedjob})
}
const deletejob= async(req,res)=>{
    const {id}=req.params
    const deljob= await jobmodel.findByIdAndDelete(id )
    if(!deljob){
        return res.status(404).json({message:'job not found'})
    }
    res.status(200).json({message:'job deleted sucessfully'})

}
const getjob= async(req,res)=>{
    const jobs= await jobmodel.find()
    res.status(200).json({message:"jobs fetched successfully",jobs})
}
const getjobdetails= async(req,res)=>{
    const jobdetailpage= await jobmodel.findById(req.params.id)
    res.status(200).json({message:'job fetched sucessfully', jobdetailpage})
}
const getallapplications = async (req, res) => {

    const { id } = req.params

    const job = await jobmodel.findById(id)

    if (!job) {
        return res.status(404).json({
            message: 'Job not found'
        })
    }

    if (job.recruiter.toString() !== req.user.id) {
        return res.status(403).json({
            message: 'You are not authorized to view these applications'
        })
    }

    const applications = await applicationmodel
        .find({ job: id })
        .populate('user', 'username email')

    res.status(200).json({
        message: 'Applications fetched successfully',
        applications
    })
}
const createbulkjob = async (req, res) => {
    try {
        const jobs = req.body.map(job => ({
            ...job,
            recruiter: req.user.id
        }))

        const createdjobs = await jobmodel.insertMany(jobs)

        res.status(201).json({
            message: "Jobs created successfully",
            jobs: createdjobs
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports={createjob, createbulkjob, getjob,getjobdetails,editjob,deletejob,getallapplications}