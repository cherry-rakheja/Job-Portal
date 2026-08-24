const express= require('express');
const cookieparser= require('cookie-parser')
const app= express();
const cors = require('cors')
const authroute= require('../src/routes/authroute')
const jobroute= require('../src/routes/jobroute')
const applicationroute= require('../src/routes/applicationroute')
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173','https://job-portal-beta-mauve-51.vercel.app'],
    credentials: true
}))
app.use(cookieparser())
app.use('/api/auth',authroute)
app.use('/api/jobs',jobroute)
app.use('/api/application',applicationroute)
module.exports= app;