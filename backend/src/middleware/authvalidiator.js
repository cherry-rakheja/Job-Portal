const {body,validationResult}= require('express-validator')
const registervalidiation= [
    body('username')
    .trim()
    .notEmpty().withMessage('username is required')
    .isLength({min:3}).withMessage('username must be atleast 3 charaters'),

    body('email').trim().notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Enter a valid email'),

    body('password').notEmpty().withMessage('password is required')
    .isLength({min:6}).withMessage('password must be atleast 6 characters'),
    
    body('role').optional().isIn(['recruiter','jobseeker']).withMessage('role must be job seeker or recruiter'),
    (req,res,next)=>{
        const errors= validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        next()
    }
]
const loginvalidiation=[
    body('email').trim().notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Enter a valid email'),

    body('password').notEmpty().withMessage('password is required')
    .isLength({min:6}).withMessage('password must be atleast 6 characters'),
    (req,res,next)=>{
        const errors= validationResult(req)
        if(!errors.isEmpty){
            return res.status(400).json({errors:errors.array()})
        }
    }
]
module.exports= registervalidiation