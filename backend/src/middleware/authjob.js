const jwt= require('jsonwebtoken')
const authrecruiter=async(req,res,next)=>{
    const authheader= req.headers.authorization
    const token=authheader && authheader.split(' ')[1]
        if(!token){
        return res.status(401).json({message:'unauthorized'})
    }
    try {
        const decoded= jwt.verify(token,process.env.JWT_SECRET)
        if(decoded.role!=='recruiter'){
            return res.status(403).json({message:'authenticated but not allowed'})
        }
        req.user= decoded
        next()
        
    } catch (error) {
        console.log(error)
        res.status(401).json({message:'unauthorized'})
    }
}
const jobseeker= async(req,res,next)=>{
    const authheader= req.headers.authorization
    const token= authheader&& authheader.split(' ')[1]
    if(!token){
        return res.status(401).json({message:'unauthorized'})
    }
    try{
        const decoded= jwt.verify(token,process.env.JWT_SECRET)
        if(decoded.role!=='jobseeker'){
            return res.status(403).json({message:'authenticated but not allowed'})
        }
        req.user=decoded
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({message:'unauthorized'})
    }
}
module.exports= {authrecruiter,jobseeker}