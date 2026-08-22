const { body, validationResult } = require('express-validator')

const createjobvalidation = [

    body('title')
        .trim()
        .notEmpty()
        .withMessage('Job title is required')
        .isLength({ min: 3 })
        .withMessage('Job title must be at least 3 characters'),

    body('company')
        .trim()
        .notEmpty()
        .withMessage('Company name is required')
        .isLength({ min: 2 })
        .withMessage('Company name must be at least 2 characters'),

    body('description')
        .trim()
        .notEmpty()
        .withMessage('Job description is required')
        .isLength({ min: 20 })
        .withMessage('Description must be at least 20 characters'),

    body('location')
        .trim()
        .notEmpty()
        .withMessage('Location is required'),

    body('salary')
        .trim()
        .notEmpty()
        .withMessage('Salary is required'),

    body('jobtype')
        .trim()
        .notEmpty()
        .withMessage('Job type is required')
        .isIn([
            'Full Time',
            'Part Time',
            'Internship',
            'Contract'
        ])
        .withMessage('Invalid job type'),

    body('skills')
        .isArray({ min: 1 })
        .withMessage('At least one skill is required'),

    body('skills.*')
        .trim()
        .notEmpty()
        .withMessage('Skill cannot be empty'),

    (req, res, next) => {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        next()
    }
]

module.exports = createjobvalidation