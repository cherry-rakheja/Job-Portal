import React, { useContext } from 'react'
import Jobseekernav from '../components/common/Jobseekernav'
import Logoutbtn from '../components/common/Logoutbtn'
import { usercont } from '../context/Usercontext'

const Jobseekerdb = () => {

    const { user } = useContext(usercont)

    return (
        <div className="min-h-screen bg-[#060D17] text-white">

            <Jobseekernav />

            <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">

                {/* Header */}
                <div className="mb-8 flex items-start justify-between">

                    <div>
                        <p className="text-sm text-white/50">
                            Welcome back{' '}
                            <span className="font-semibold uppercase text-[#8B6CFF]">
                                {user?.username}
                            </span>
                        </p>

                        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                            Your Dashboard
                        </h1>

                        <p className="mt-2 text-sm text-white/40">
                            Manage your profile, applications and career journey.
                        </p>
                    </div>

                    <Logoutbtn />

                </div>


                {/* Profile Card */}
                <div className="mb-6 rounded-xl border border-white/10 bg-[#0B111D] p-6">

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex items-center gap-4">

                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#492DBB] text-xl font-bold">
                                {user?.username?.charAt(0).toUpperCase()}
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold">
                                    {user?.username}
                                </h2>

                                <p className="text-sm text-white/40">
                                    {user?.email}
                                </p>

                                <span className="mt-2 inline-block rounded-full bg-[#492DBB]/20 px-3 py-1 text-xs text-[#A995FF]">
                                    Job Seeker
                                </span>
                            </div>

                        </div>

                        <button className="rounded-lg border border-white/10 px-5 py-2 text-sm font-medium transition hover:border-[#492DBB] hover:bg-[#492DBB]/10">
                            Edit Profile
                        </button>

                    </div>

                </div>


                {/* Stats */}
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-xl border border-white/10 bg-[#0B111D] p-5">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#492DBB]/20">
                            <i className="ri-send-plane-line text-lg text-[#8B6CFF]"></i>
                        </div>

                        <p className="text-sm text-white/40">
                            Applications
                        </p>

                        <h3 className="mt-1 text-2xl font-bold">
                            12
                        </h3>
                    </div>


                    <div className="rounded-xl border border-white/10 bg-[#0B111D] p-5">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                            <i className="ri-time-line text-lg text-blue-400"></i>
                        </div>

                        <p className="text-sm text-white/40">
                            Under Review
                        </p>

                        <h3 className="mt-1 text-2xl font-bold">
                            5
                        </h3>
                    </div>


                    <div className="rounded-xl border border-white/10 bg-[#0B111D] p-5">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                            <i className="ri-checkbox-circle-line text-lg text-green-400"></i>
                        </div>

                        <p className="text-sm text-white/40">
                            Shortlisted
                        </p>

                        <h3 className="mt-1 text-2xl font-bold">
                            3
                        </h3>
                    </div>


                    <div className="rounded-xl border border-white/10 bg-[#0B111D] p-5">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                            <i className="ri-close-circle-line text-lg text-red-400"></i>
                        </div>

                        <p className="text-sm text-white/40">
                            Rejected
                        </p>

                        <h3 className="mt-1 text-2xl font-bold">
                            4
                        </h3>
                    </div>

                </div>


                {/* Bottom Section */}
                <div className="grid gap-6 lg:grid-cols-2">

                    {/* Profile Completion */}
                    <div className="rounded-xl border border-white/10 bg-[#0B111D] p-6">

                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="font-semibold">
                                    Profile Completion
                                </h2>

                                <p className="mt-1 text-xs text-white/40">
                                    Complete your profile to improve visibility
                                </p>
                            </div>

                            <span className="text-sm font-semibold text-[#8B6CFF]">
                                70%
                            </span>
                        </div>

                        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full w-[70%] rounded-full bg-[#492DBB]"></div>
                        </div>

                        <div className="mt-5 space-y-3">

                            <div className="flex items-center gap-3 text-sm">
                                <i className="ri-checkbox-circle-fill text-green-400"></i>
                                Basic information
                            </div>

                            <div className="flex items-center gap-3 text-sm">
                                <i className="ri-checkbox-circle-fill text-green-400"></i>
                                Email verified
                            </div>

                            <div className="flex items-center gap-3 text-sm text-white/50">
                                <i className="ri-checkbox-blank-circle-line"></i>
                                Add resume
                            </div>

                            <div className="flex items-center gap-3 text-sm text-white/50">
                                <i className="ri-checkbox-blank-circle-line"></i>
                                Add skills
                            </div>

                        </div>

                    </div>


                    {/* Quick Actions */}
                    <div className="rounded-xl border border-white/10 bg-[#0B111D] p-6">

                        <h2 className="font-semibold">
                            Quick Actions
                        </h2>

                        <p className="mt-1 text-xs text-white/40">
                            Manage your job search
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-3">

                            <button className="rounded-lg border border-white/10 p-4 text-left transition hover:border-[#492DBB] hover:bg-[#492DBB]/10">
                                <i className="ri-search-line text-xl text-[#8B6CFF]"></i>

                                <p className="mt-3 text-sm font-medium">
                                    Find Jobs
                                </p>
                            </button>


                            <button className="rounded-lg border border-white/10 p-4 text-left transition hover:border-[#492DBB] hover:bg-[#492DBB]/10">
                                <i className="ri-file-user-line text-xl text-[#8B6CFF]"></i>

                                <p className="mt-3 text-sm font-medium">
                                    My Resume
                                </p>
                            </button>


                            <button className="rounded-lg border border-white/10 p-4 text-left transition hover:border-[#492DBB] hover:bg-[#492DBB]/10">
                                <i className="ri-send-plane-line text-xl text-[#8B6CFF]"></i>

                                <p className="mt-3 text-sm font-medium">
                                    Applications
                                </p>
                            </button>


                            <button className="rounded-lg border border-white/10 p-4 text-left transition hover:border-[#492DBB] hover:bg-[#492DBB]/10">
                                <i className="ri-settings-3-line text-xl text-[#8B6CFF]"></i>

                                <p className="mt-3 text-sm font-medium">
                                    Settings
                                </p>
                            </button>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default Jobseekerdb