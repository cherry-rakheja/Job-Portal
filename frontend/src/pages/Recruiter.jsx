import React from 'react'
import Recruiternav from '../components/common/Recruiternav'
import Logoutbtn from '../components/common/Logoutbtn'

const Recruiter = () => {

    return (
        <div className="min-h-screen bg-[#060D17] text-white">

            <Recruiternav />

            <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">

                {/* Header */}
                <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <p className="text-sm text-white/40">
                            Welcome back
                        </p>

                        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                            Recruiter Dashboard
                        </h1>

                        <p className="mt-2 text-sm text-white/40">
                            Manage your jobs and find the right candidates.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">


                        <Logoutbtn />

                    </div>

                </div>


                {/* Stats */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Active Jobs */}
                    <div className="rounded-xl border border-white/10 bg-[#0B111D] p-5">

                        <div className="flex items-center justify-between">

                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#492DBB]/20">
                                <i className="ri-briefcase-line text-xl text-[#8B6CFF]"></i>
                            </div>

                            <span className="text-xs text-green-400">
                                +2 this month
                            </span>

                        </div>

                        <p className="mt-5 text-sm text-white/40">
                            Active Jobs
                        </p>

                        <h2 className="mt-1 text-2xl font-bold">
                            12
                        </h2>

                    </div>


                    {/* Applications */}
                    <div className="rounded-xl border border-white/10 bg-[#0B111D] p-5">

                        <div className="flex items-center justify-between">

                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#492DBB]/20">
                                <i className="ri-file-list-3-line text-xl text-[#8B6CFF]"></i>
                            </div>

                            <span className="text-xs text-green-400">
                                +18%
                            </span>

                        </div>

                        <p className="mt-5 text-sm text-white/40">
                            Applications
                        </p>

                        <h2 className="mt-1 text-2xl font-bold">
                            148
                        </h2>

                    </div>


                    {/* Candidates */}
                    <div className="rounded-xl border border-white/10 bg-[#0B111D] p-5">

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#492DBB]/20">
                            <i className="ri-user-search-line text-xl text-[#8B6CFF]"></i>
                        </div>

                        <p className="mt-5 text-sm text-white/40">
                            Candidates
                        </p>

                        <h2 className="mt-1 text-2xl font-bold">
                            86
                        </h2>

                    </div>


                    {/* Interviews */}
                    <div className="rounded-xl border border-white/10 bg-[#0B111D] p-5">

                        <div className="flex items-center justify-between">

                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#492DBB]/20">
                                <i className="ri-calendar-check-line text-xl text-[#8B6CFF]"></i>
                            </div>

                            <span className="text-xs text-white/40">
                                This week
                            </span>

                        </div>

                        <p className="mt-5 text-sm text-white/40">
                            Interviews
                        </p>

                        <h2 className="mt-1 text-2xl font-bold">
                            9
                        </h2>

                    </div>

                </div>


                {/* Main Grid */}
                <div className="mt-8 grid gap-6 lg:grid-cols-3">


                    {/* Recent Jobs */}
                    <section className="rounded-xl border border-white/10 bg-[#0B111D] lg:col-span-2">

                        <div className="flex items-center justify-between border-b border-white/10 p-5">

                            <div>
                                <h2 className="font-semibold">
                                    Your Job Postings
                                </h2>

                                <p className="mt-1 text-xs text-white/35">
                                    Manage your recently posted jobs
                                </p>
                            </div>

                            <button className="text-xs text-[#8B6CFF] hover:underline">
                                View All
                            </button>

                        </div>


                        {/* Job 1 */}
                        <div className="border-b border-white/10 p-5">

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                <div>

                                    <h3 className="font-medium">
                                        Frontend Developer
                                    </h3>

                                    <div className="mt-2 flex flex-wrap gap-4 text-xs text-white/35">

                                        <span>
                                            <i className="ri-map-pin-line mr-1"></i>
                                            Delhi
                                        </span>

                                        <span>
                                            <i className="ri-briefcase-line mr-1"></i>
                                            Full Time
                                        </span>

                                        <span>
                                            Posted 2 days ago
                                        </span>

                                    </div>

                                </div>


                                <div className="flex items-center gap-4">

                                    <div className="text-right">

                                        <p className="text-sm font-semibold">
                                            24
                                        </p>

                                        <p className="text-[11px] text-white/35">
                                            Applicants
                                        </p>

                                    </div>

                                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-[11px] text-green-400">
                                        Active
                                    </span>

                                    <button className="text-white/40 hover:text-white">
                                        <i className="ri-more-2-fill"></i>
                                    </button>

                                </div>

                            </div>

                        </div>


                        {/* Job 2 */}
                        <div className="border-b border-white/10 p-5">

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                <div>

                                    <h3 className="font-medium">
                                        React Developer
                                    </h3>

                                    <div className="mt-2 flex flex-wrap gap-4 text-xs text-white/35">

                                        <span>
                                            <i className="ri-map-pin-line mr-1"></i>
                                            Gurgaon
                                        </span>

                                        <span>
                                            <i className="ri-briefcase-line mr-1"></i>
                                            Full Time
                                        </span>

                                        <span>
                                            Posted 5 days ago
                                        </span>

                                    </div>

                                </div>


                                <div className="flex items-center gap-4">

                                    <div className="text-right">

                                        <p className="text-sm font-semibold">
                                            41
                                        </p>

                                        <p className="text-[11px] text-white/35">
                                            Applicants
                                        </p>

                                    </div>

                                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-[11px] text-green-400">
                                        Active
                                    </span>

                                    <button className="text-white/40 hover:text-white">
                                        <i className="ri-more-2-fill"></i>
                                    </button>

                                </div>

                            </div>

                        </div>


                        {/* Job 3 */}
                        <div className="p-5">

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                <div>

                                    <h3 className="font-medium">
                                        Backend Developer
                                    </h3>

                                    <div className="mt-2 flex flex-wrap gap-4 text-xs text-white/35">

                                        <span>
                                            <i className="ri-map-pin-line mr-1"></i>
                                            Remote
                                        </span>

                                        <span>
                                            <i className="ri-briefcase-line mr-1"></i>
                                            Full Time
                                        </span>

                                        <span>
                                            Posted 8 days ago
                                        </span>

                                    </div>

                                </div>


                                <div className="flex items-center gap-4">

                                    <div className="text-right">

                                        <p className="text-sm font-semibold">
                                            18
                                        </p>

                                        <p className="text-[11px] text-white/35">
                                            Applicants
                                        </p>

                                    </div>

                                    <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/40">
                                        Closed
                                    </span>

                                    <button className="text-white/40 hover:text-white">
                                        <i className="ri-more-2-fill"></i>
                                    </button>

                                </div>

                            </div>

                        </div>

                    </section>


                    {/* Right Side */}
                    <div className="space-y-6">


                        {/* Post Job */}
                        <section className="rounded-xl border border-[#492DBB]/30 bg-[#492DBB]/10 p-6">

                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#492DBB]/20">
                                <i className="ri-add-line text-2xl text-[#8B6CFF]"></i>
                            </div>

                            <h2 className="mt-5 font-semibold">
                                Post a New Job
                            </h2>

                            <p className="mt-2 text-xs leading-5 text-white/40">
                                Reach talented candidates and find the right
                                person for your team.
                            </p>

                            <button className="mt-5 w-full rounded-lg bg-[#492DBB] py-3 text-sm font-semibold hover:bg-[#5A3BD0]">
                                Create Job
                            </button>

                        </section>


                        {/* Recent Applications */}
                        <section className="rounded-xl border border-white/10 bg-[#0B111D]">

                            <div className="border-b border-white/10 p-5">

                                <h2 className="font-semibold">
                                    Recent Applications
                                </h2>

                            </div>


                            <div className="space-y-1 p-3">

                                {/* Applicant */}
                                <div className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#492DBB]/20 text-xs font-semibold text-[#8B6CFF]">
                                        AS
                                    </div>

                                    <div className="min-w-0 flex-1">

                                        <p className="truncate text-sm">
                                            Aman Sharma
                                        </p>

                                        <p className="truncate text-xs text-white/35">
                                            Frontend Developer
                                        </p>

                                    </div>

                                    <i className="ri-arrow-right-s-line text-white/30"></i>

                                </div>


                                <div className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#492DBB]/20 text-xs font-semibold text-[#8B6CFF]">
                                        RK
                                    </div>

                                    <div className="min-w-0 flex-1">

                                        <p className="truncate text-sm">
                                            Rahul Kumar
                                        </p>

                                        <p className="truncate text-xs text-white/35">
                                            React Developer
                                        </p>

                                    </div>

                                    <i className="ri-arrow-right-s-line text-white/30"></i>

                                </div>


                                <div className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#492DBB]/20 text-xs font-semibold text-[#8B6CFF]">
                                        PS
                                    </div>

                                    <div className="min-w-0 flex-1">

                                        <p className="truncate text-sm">
                                            Priya Singh
                                        </p>

                                        <p className="truncate text-xs text-white/35">
                                            Backend Developer
                                        </p>

                                    </div>

                                    <i className="ri-arrow-right-s-line text-white/30"></i>

                                </div>

                            </div>

                        </section>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default Recruiter