import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Forgotpassword from './pages/Forgotpassword'
import Jobseeker from './pages/Jobseeker'
import Jobdetail from './pages/Jobdetail'
import Applyform from './pages/Applyform'
import Recruiter from './pages/Recruiter'
import Protectedroute from './pages/Protectedroute'
import NotAllowed from './pages/NotAllowed'

const App = () => {
    return (
        <Routes>

            {/* PUBLIC ROUTES */}

            <Route path="/" element={<Home />} />

            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />

            <Route
                path="/forgotpassword"
                element={<Forgotpassword />}
            />


            {/* JOBSEEKER PROTECTED ROUTES */}

            <Route
                element={
                    <Protectedroute allowedRole="jobseeker" />
                }
            >

                <Route
                    path="/jobseeker"
                    element={<Jobseeker />}
                />

                <Route
                    path="/jobdetail/:id"
                    element={<Jobdetail />}
                />

                <Route
                    path="/jobdetail/:id/apply"
                    element={<Applyform />}
                />

            </Route>


            {/* RECRUITER PROTECTED ROUTES */}

            <Route
                element={
                    <Protectedroute allowedRole="recruiter" />
                }
            >

                <Route
                    path="/recruiter"
                    element={<Recruiter />}
                />

            </Route>


            {/* NOT ALLOWED */}

            <Route
                path="/not-allowed"
                element={<NotAllowed />}
            />

            <Route
                path="*"
                element={<NotAllowed />}
            />

        </Routes>
    )
}

export default App