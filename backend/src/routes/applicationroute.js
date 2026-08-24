const express = require('express')

const router = express.Router()

const authjob = require('../middleware/authjob')
const upload = require('../middleware/Upload')

const applicationcontroller = require('../controllers/applicationcontroller')



router.post(
    '/:id/apply',
    authjob.jobseeker,
    upload.single('resume'),
    applicationcontroller.applyjob
)


router.get(
    '/getappliedjob',
    authjob.jobseeker,
    applicationcontroller.getappliedjob
)


router.patch(
    '/updateapplication/:id',
    authjob.authrecruiter,
    applicationcontroller.updateapplication
)


module.exports = router