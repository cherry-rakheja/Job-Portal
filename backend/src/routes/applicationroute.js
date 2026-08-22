const express= require('express')
const router= express.Router()
const authjob= require('../middleware/authjob')
const applicationcontroller= require('../controllers/applicationcontroller')
router.post('/:id/apply',authjob.jobseeker,applicationcontroller.applyjob)
router.get('/getappliedjob',authjob.jobseeker,applicationcontroller.getappliedjob)
router.patch('/updateapplication/:id',authjob.authrecruiter,applicationcontroller.updateapplication)
module.exports=router