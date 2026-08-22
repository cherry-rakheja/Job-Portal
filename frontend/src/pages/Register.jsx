import React, { useState } from 'react'
import Navbar from '../components/common/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate= useNavigate()

    const [role, setRole] = useState('jobseeker')
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setformData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const submithandler = async (dets) => {
        dets.preventDefault()
       try {
         const response= await axios.post("http://localhost:3000/api/auth/register",{
          ...formData,role
          
        })

        setformData({
            username: '',
            email: '',
            password: ''
        })
       } catch (error) {
        console.log('STATUS:', error.response?.status)
        console.log('DATA:', error.response?.data)
        console.log('MESSAGE:', error.response?.data?.message)
        
       }
    }

    return (
    <div className="h-screen w-full overflow-hidden bg-[#060D17] px-4 text-white sm:px-6">

        <Navbar />

        <div className="mx-auto flex w-full max-w-xl flex-col items-center mt-9 pt-3 sm:pt-4">

            {/* Heading */}
            <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
                Create Account ✨
            </h1>

            <p className="mt-1 text-center text-xs font-semibold text-white/70 sm:text-sm">
                Join us and start your journey
            </p>

            {/* Role Buttons */}
            <div className="mt-4 flex w-full max-w-md rounded-lg border border-white/50 p-1 sm:mt-5">

                <button
                    type="button"
                    onClick={() => setRole('jobseeker')}
                    className={`w-1/2 rounded-lg border py-2 text-sm font-semibold transition sm:py-2.5 sm:text-base
                        ${
                            role === 'jobseeker'
                                ? 'border-bgpurple text-bgpurple'
                                : 'border-transparent text-white/60'
                        }`}
                >
                    Job Seeker
                </button>

                <button
                    type="button"
                    onClick={() => setRole('recruiter')}
                    className={`w-1/2 rounded-lg border py-2 text-sm font-semibold transition sm:py-2.5 sm:text-base
                        ${
                            role === 'recruiter'
                                ? 'border-bgpurple text-bgpurple'
                                : 'border-transparent text-white/60'
                        }`}
                >
                    Recruiter
                </button>

            </div>

            {/* Form */}
            <form
                onSubmit={submithandler}
                className="mt-4 w-full space-y-3 sm:mt-5 sm:space-y-4"
            >

                {/* Username */}
                <div>
                    <label className="mb-1 block text-sm">
                        Username
                    </label>

                    <input
                        type="text"
                        value={formData.username}
                        onChange={(evt) => {
                            setformData({
                                ...formData,
                                username: evt.target.value
                            })
                        }}
                        placeholder="Enter your username"
                        className="w-full rounded-lg border border-white/20 bg-[#0B111D] px-4 py-2 text-sm outline-none placeholder:text-white/30 focus:border-[#492DBB] sm:py-2.5"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="mb-1 block text-sm">
                        Email
                    </label>

                    <input
                        type="email"
                        value={formData.email}
                        onChange={(evt) => {
                            setformData({
                                ...formData,
                                email: evt.target.value
                            })
                        }}
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-white/20 bg-[#0B111D] px-4 py-2 text-sm outline-none placeholder:text-white/30 focus:border-[#492DBB] sm:py-2.5"
                    />
                </div>

           <div>
    <label className="mb-1 block text-sm">
        Password
    </label>

    <div className="relative">
        <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => {
                setformData({
                    ...formData,
                    password: e.target.value
                })
            }}
            placeholder="Enter your password"
            className="w-full rounded-lg border border-white/20 bg-[#0B111D] px-4 py-2 pr-12 text-sm outline-none placeholder:text-white/30 focus:border-[#492DBB] sm:py-2.5"
        />

        <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
        >
            <i
                className={
                    showPassword
                        ? "ri-eye-line text-lg text-white/50"
                        : "ri-eye-close-line text-lg text-white/50"
                }
            ></i>
        </button>
    </div>
</div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-[#492DBB] py-2.5 text-sm font-semibold transition hover:bg-[#5a3bd0]"
                >
                    Create Account
                </button>

                {/* Login */}
                <p className="text-center text-xs text-white/50 sm:text-sm">
                    Already have an account?

                    <span onClick={()=>navigate('/login')}
                     className="ml-1 cursor-pointer text-[#8B6CFF] hover:underline">
                        Login
                    </span>
                </p>

            </form>

        </div>
    </div>
)
}

export default Register
