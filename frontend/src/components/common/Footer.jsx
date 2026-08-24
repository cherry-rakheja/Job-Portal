import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

    return (

        <footer className="mt-20 border-t border-white/10 bg-[#060D17]">

            <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">

                <div className="
                    grid grid-cols-1 gap-10
                    sm:grid-cols-2
                    lg:grid-cols-4
                ">

                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">

                        <div
                            onClick={() => navigate('/')}
                            className="flex cursor-pointer items-center gap-2"
                        >

                            <div className="
                                flex h-9 w-9
                                items-center justify-center
                                rounded-lg
                                bg-[#492DBB]
                            ">
                                <i className="ri-briefcase-4-line text-lg"></i>
                            </div>

                            <span className="text-lg font-bold">
                                Apna<span className="text-[#8B6CFF]">Career</span>
                            </span>

                        </div>


                        <p className="
                            mt-4 max-w-xs
                            text-sm leading-6
                            text-white/45
                        ">
                            Discover new opportunities, connect with
                            great companies and build your career.
                        </p>


                        {/* Social */}
                        <div className="mt-5 flex gap-2">

                            <a
                                href="#"
                                className="
                                    flex h-9 w-9 items-center justify-center
                                    rounded-lg border border-white/10
                                    text-white/50 transition
                                    hover:border-[#8B6CFF]/30
                                    hover:text-[#8B6CFF]
                                "
                            >
                                <i className="ri-linkedin-fill"></i>
                            </a>

                            <a
                                href="#"
                                className="
                                    flex h-9 w-9 items-center justify-center
                                    rounded-lg border border-white/10
                                    text-white/50 transition
                                    hover:border-[#8B6CFF]/30
                                    hover:text-[#8B6CFF]
                                "
                            >
                                <i className="ri-instagram-line"></i>
                            </a>

                            <a
                                href="#"
                                className="
                                    flex h-9 w-9 items-center justify-center
                                    rounded-lg border border-white/10
                                    text-white/50 transition
                                    hover:border-[#8B6CFF]/30
                                    hover:text-[#8B6CFF]
                                "
                            >
                                <i className="ri-github-line"></i>
                            </a>

                        </div>

                    </div>


                    {/* For Job Seekers */}
                    <div>

                        <h3 className="text-sm font-semibold text-white">
                            For Job Seekers
                        </h3>

                        <div className="mt-4 space-y-3">

                            <Link
                                onClick={() => navigate('/jobseeker')}
                                className="block text-sm text-white/45 transition hover:text-white"
                            >
                                Find Jobs
                            </Link>

                            <Link
                                onClick={() => navigate('/jobseeker')}
                                className="block text-sm text-white/45 transition hover:text-white"
                            >
                                Browse Companies
                            </Link>

                            <Link
                                onClick={() => navigate('/jobseeker')}
                                className="block text-sm text-white/45 transition hover:text-white"
                            >
                                Popular Skills
                            </Link>

                        </div>

                    </div>


                    {/* For Recruiters */}
                    <div>

                        <h3 className="text-sm font-semibold text-white">
                            For Recruiters
                        </h3>

                        <div className="mt-4 space-y-3">

                            <Link
                                onClick={() => navigate('/recruiter')}
                                className="block text-sm text-white/45 transition hover:text-white"
                            >
                                Post a Job
                            </Link>

                            <Link
                                onClick={() => navigate('/recruiter')}
                                className="block text-sm text-white/45 transition hover:text-white"
                            >
                                Find Candidates
                            </Link>

                            <Link
                                onClick={() => navigate('/recruiter')}
                                className="block text-sm text-white/45 transition hover:text-white"
                            >
                                Recruiter Dashboard
                            </Link>

                        </div>

                    </div>


                    {/* Company */}
                    <div>

                        <Link className="text-sm font-semibold text-white">
                            Company
                        </Link>

                        <div className="mt-4 space-y-3">

                            <Link
                                className="block text-sm text-white/45 transition hover:text-white"
                            >
                                About Us
                            </Link>

                            <Link
                                className="block text-sm text-white/45 transition hover:text-white"
                            >
                                Contact
                            </Link>

                            <Link
                                className="block text-sm text-white/45 transition hover:text-white"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                className="block text-sm text-white/45 transition hover:text-white"
                            >
                                Terms & Conditions
                            </Link>

                        </div>

                    </div>

                </div>


                {/* Bottom */}
                <div className="
                    mt-10 flex flex-col gap-3
                    border-t border-white/10
                    pt-6
                    text-xs text-white/35
                    sm:flex-row sm:items-center
                    sm:justify-between
                ">

                    <p>
                        © {new Date().getFullYear()} JobPortal. All rights reserved.
                    </p>

                    <p>
                        Built with React & Node.js
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer