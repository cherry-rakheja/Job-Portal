const applicationmodel = require('../models/applicationmodel')
const jobmodel = require('../models/jobmodel')
const uploadFile = require('../service/storageservice')


const applyjob = async (req, res) => {

    try {

        const { id } = req.params

        const job = await jobmodel.findById(id)

        if (!job) {
            return res.status(404).json({
                message: 'job not found'
            })
        }

        if (!req.file) {
            return res.status(400).json({
                message: 'resume is required'
            })
        }

        const isAlreadyApplied = await applicationmodel.findOne({
            job: id,
            user: req.user.id
        })

        if (isAlreadyApplied) {
            return res.status(409).json({
                message: 'you have already applied for this job'
            })
        }

        console.log('FILE:', req.file)
        console.log(
            'IMAGEKIT SECRET:',
            !!process.env.IMAGEKIT_SECRET
        )

        // Upload resume
        const uploadedFile = await uploadFile(req.file)

        console.log('IMAGEKIT RESPONSE:', uploadedFile)

        const application = await applicationmodel.create({
            job: id,
            user: req.user.id,
            resume: uploadedFile.url
        })

        return res.status(201).json({
            message: 'applied successfully',
            application
        })

    } 
    catch (error) {
    console.log("APPLY JOB ERROR:", error)
    console.log("ERROR MESSAGE:", error.message)

    return res.status(500).json({
        message: error.message
    })
}
}


const getappliedjob = async (req, res) => {

    try {

        const user = req.user.id

        const applications = await applicationmodel
            .find({ user })
            .populate('job')

        return res.status(200).json({
            message: 'applications fetched successfully',
            applications
        })

    } catch (error) {

        console.log('GET APPLICATION ERROR:', error)

        return res.status(500).json({
            message: error.message
        })
    }
}


const updateapplication = async (req, res) => {

    try {

        const { id } = req.params
        const { status } = req.body

        const application = await applicationmodel.findByIdAndUpdate(
            id,
            { status },
            {
                new: true,
                runValidators: true
            }
        )

        if (!application) {
            return res.status(404).json({
                message: 'application not found'
            })
        }

        return res.status(200).json({
            message: 'application status updated successfully',
            application
        })

    } catch (error) {

        console.log('UPDATE APPLICATION ERROR:', error)

        return res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    applyjob,
    getappliedjob,
    updateapplication
}