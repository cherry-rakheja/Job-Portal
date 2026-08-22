import axios from "axios";
import { useState } from "react";
import Navbar from "../components/common/Navbar";import { useNavigate } from "react-router-dom";


const Forgotpassword = () => {
    const naviagte= useNavigate()
    const [email, setemail] = useState('');
    const [loading, setloading] = useState(false);
    const [otpsent, setotpsent] = useState(false);
    const [otp, setotp] = useState('');

    const submithandler = async (dets) => {
        dets.preventDefault();

        try {
            setloading(true);

            const response = await axios.post(
                'http://localhost:3000/api/auth/forgotpassword',
                { email }
            );

            console.log(response);
            setotpsent(true)

        } catch (error) {
            console.log(error);

        } finally {
            setloading(false);
        }
    };
    const otpverify=async(dets)=>{
        dets.preventDefault()
        naviagte('/')
       try {
         const response= await axios.post('http://localhost:3000/api/auth/verifyotp',{email,otp})
        console.log(response);
       } catch (error) {
    console.log("STATUS:", error.response?.status)
    console.log("DATA:", error.response?.data)
    console.log("MESSAGE:", error.response?.data?.message)
}
    }


    return (
        <div className="h-screen w-full overflow-hidden bg-[#060D17] px-4 text-white sm:px-6">

            <Navbar />

            <div className="mx-auto flex w-full max-w-md flex-col items-center pt-16 sm:pt-20">

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#492DBB]/20">
                    <i className="ri-lock-password-line text-2xl text-[#8B6CFF]"></i>
                </div>

                <h1 className="text-center text-2xl font-bold sm:text-3xl">
                    Forgot Password?
                </h1>

                <p className="mt-2 max-w-sm text-center text-xs leading-5 text-white/50 sm:text-sm">
                    Don't worry! Enter your registered email address and
                    we'll send you an OTP to reset your password.
                </p>

                {!otpsent ? (
    <form onSubmit={submithandler} className="mt-8 w-full space-y-5">

        <div>
            <label className="mb-1.5 block text-sm font-medium">
                Email Address
            </label>

            <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/20 bg-[#0B111D] px-4 py-3 text-sm outline-none focus:border-[#492DBB]"
            />
        </div>

        <button 
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#492DBB] py-3 text-sm font-semibold"
        >
            {loading ? 'Sending OTP...' : 'Send OTP'}
        </button>

    </form>
) : (
    <form onSubmit={otpverify} className="mt-8 w-full space-y-5">

        <div>
            <label className="mb-1.5 block text-sm font-medium">
                Enter OTP
            </label>

            <input onChange={(evt)=>{
                setotp(evt.target.value)
            }}
                type="text"
                value={otp}
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                className="w-full rounded-lg border border-white/20 bg-[#0B111D] px-4 py-3 text-center text-lg tracking-[0.5em] outline-none focus:border-[#492DBB]"
            />
        </div>

        <button
            type="submit"
            className="w-full rounded-lg bg-[#492DBB] py-3 text-sm font-semibold hover:bg-[#5a3bd0]"
        >
            Verify OTP
        </button>

    </form>
)}

            </div>
        </div>
    );
};

export default Forgotpassword;