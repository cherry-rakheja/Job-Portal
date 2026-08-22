const express= require('express');
const authcontroller= require('../controllers/authcontroller')
const authvalidiator= require('../middleware/authvalidiator')
const authjob= require('../middleware/authjob')
const router= express.Router();
router.post('/register',authvalidiator,authcontroller.registeruser)
router.post('/token',authcontroller.generatetoken)
router.post('/login',authcontroller.loginuser)
router.get('/profile',authjob.jobseeker,authcontroller.userprofile)
router.patch('/updateprofile',authjob.jobseeker,authcontroller.updateprofile)
router.delete('/deleteprofile',authjob.jobseeker,authcontroller.deleteprofile)
router.post('/logout',authcontroller.logoutuser)
router.post('/forgotpassword',authcontroller.forgotpassword)
router.post('/verifyotp',authcontroller.verifyOTP)

module.exports=router