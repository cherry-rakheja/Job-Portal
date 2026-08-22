import React, { useContext, useState } from 'react'
import Navbar from '../components/common/Navbar'
import { useNavigate } from 'react-router-dom'
import { usercont } from '../context/Usercontext'
import api from '../service/axios'

const Login = () => {

    const { setacesstoken,setUser } = useContext(usercont)
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const [formData, setformData] = useState({
        email: '',
        password: ''
    })


    const submithandler = async (dets) => {

        dets.preventDefault()

        setError('')
        setLoading(true)

        try {

            const response = await api.post(
                '/auth/login',
                { ...formData },
                {
                    withCredentials: true
                }
            )

            console.log("LOGIN RESPONSE:", response.data)

            const token = response.data.acesstoken
            const loggeduser= response.data.user
            console.log(loggeduser);
            console.log(loggeduser?.role);

            // Token context mein save
            setacesstoken(token)
            setUser(loggeduser)
           

            // Role ke according dashboard
            if (loggeduser?.role === 'recruiter') {

                navigate('/recruiter',{replace:true})

            } 
            else if (loggeduser?.role=== 'jobseeker') {

                navigate('/jobseeker',{replace:true})

            } 
            else {

                navigate('/not-allowed')
            }

        }

        catch (error) {

            console.log("FULL ERROR:", error)

            const status = error.response?.status
            const message = error.response?.data?.message

            if (status === 404) {

                setError(
                    message || 'User does not exist'
                )

            } 
            else if (status === 401) {

                setError(
                    message || 'Invalid email or password'
                )

            } 
            else if (status === 403) {

                setError(
                    message || 'You are not allowed to login'
                )

            } 
            else {

                setError(
                    message || 'Something went wrong. Please try again.'
                )
            }

        }

        finally {

            setLoading(false)

        }
    }


    return (
        <div className="h-screen w-full overflow-hidden bg-[#060D17] px-4 text-white">

            <Navbar />

            <div className="mx-auto flex w-full max-w-xl flex-col items-center mt-14 sm:mt-16">

                <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
                    Welcome Back 👋
                </h1>

                <p className="mt-1 text-center text-xs font-semibold text-white/70 sm:text-sm">
                    Login to continue your journey
                </p>


                <form
                    onSubmit={submithandler}
                    className="mt-7 w-full space-y-4 sm:mt-8 sm:space-y-5"
                >

                    {/* Email */}
                    <div>

                        <label className="mb-1 block text-sm">
                            Email
                        </label>

                        <input
                            onChange={(evt) => {
                                setformData({
                                    ...formData,
                                    email: evt.target.value
                                })
                            }}
                            value={formData.email}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-white/20 bg-[#0B111D] px-4 py-2.5 text-sm outline-none placeholder:text-white/30 focus:border-[#492DBB] sm:py-3"
                        />

                    </div>


                    {/* Password */}
                    <div>

                        <div className="mb-1 flex items-center justify-between">

                            <label className="text-sm">
                                Password
                            </label>

                            <span
                                onClick={() => navigate('/forgotpassword')}
                                className="cursor-pointer text-xs text-[#8B6CFF] hover:underline"
                            >
                                Forgot Password?
                            </span>

                        </div>


                        <div className="relative">

                            <input
                                onChange={(evt) => {
                                    setformData({
                                        ...formData,
                                        password: evt.target.value
                                    })
                                }}
                                value={formData.password}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                className="w-full rounded-lg border border-white/20 bg-[#0B111D] px-4 py-2.5 pr-12 text-sm outline-none placeholder:text-white/30 focus:border-[#492DBB] sm:py-3"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(prev => !prev)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2"
                            >
                                <i
                                    className={
                                        showPassword
                                            ? 'ri-eye-line text-lg text-white/50'
                                            : 'ri-eye-close-line text-lg text-white/50'
                                    }
                                ></i>
                            </button>

                        </div>

                    </div>


                    {/* ERROR */}
                    {error && (
                        <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">

                            <div className="flex items-center gap-2">

                                <i className="ri-error-warning-line text-red-400"></i>

                                <p className="text-sm text-red-400">
                                    {error}
                                </p>

                            </div>

                        </div>
                    )}


                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-[#492DBB] py-2.5 text-sm font-semibold transition hover:bg-[#5a3bd0] disabled:cursor-not-allowed disabled:opacity-50 sm:py-3"
                    >

                        {loading ? 'Logging in...' : 'Login'}

                    </button>


                    {/* Register */}
                    <p className="text-center text-xs text-white/50 sm:text-sm">

                        Don't have an account?

                        <span
                            onClick={() => navigate('/register')}
                            className="ml-1 cursor-pointer text-[#8B6CFF] hover:underline"
                        >
                            Create Account
                        </span>

                    </p>

                </form>

            </div>

        </div>
    )
}

export default Login

