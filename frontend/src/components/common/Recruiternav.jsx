import React from 'react'
import { Link } from 'react-router-dom'

const Recruiternav = () => {
    return (
        <nav className="border-b border-white/10 bg-[#0B111D]">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
                    to="/recruiter"
                    className="text-xl font-bold tracking-wide text-white"
                >
                    <h1 className='text-3xl font-semibold'>Apna<span className='bg-linear-to-r from-[#B9A7FF] via-[#5A43C7] to-[#B9A7FF]   bg-clip-text text-transparent'>Career</span></h1>
                </Link>


                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">

                    <Link
                        to="/recruiter"
                        className="text-sm font-medium text-white/70 transition hover:text-white"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to=""
                        className="text-sm font-medium text-white/70 transition hover:text-white"
                    >
                        My Jobs
                    </Link>

                    <Link
                        to=""
                        className="text-sm font-medium text-white/70 transition hover:text-white"
                    >
                        Post a Job
                    </Link>

                    <Link
                        to=""
                        className="text-sm font-medium text-white/70 transition hover:text-white"
                    >
                        Applications
                    </Link>

                </div>


                {/* Right side */}
                <div className="flex items-center gap-4">

                    {/* Notification */}
                    <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-white/60 transition hover:bg-white/5 hover:text-white">
                        <i className="ri-notification-3-line text-lg"></i>

                        <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#6D4AFF]"></span>
                    </button>


                    {/* Profile */}
                    <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-white/5">

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#492DBB]/30 text-sm font-semibold text-[#A894FF]">
                            R
                        </div>

                        <div className="hidden text-left sm:block">
                            <p className="text-xs font-semibold text-white">
                                Recruiter
                            </p>

                            <p className="text-[11px] text-white/40">
                                Employer
                            </p>
                        </div>

                        <i className="ri-arrow-down-s-line hidden text-white/40 sm:block"></i>

                    </button>

                </div>

            </div>
        </nav>
    )
}

export default Recruiternav