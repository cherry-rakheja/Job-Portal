import React, { useContext, useState } from 'react'
import Jobseekernav from '../components/common/Jobseekernav'
import Logoutbtn from '../components/common/Logoutbtn'
import { usercont } from '../context/Usercontext'
import { jobcont } from '../context/Jobcontext'
import { useNavigate } from 'react-router-dom'

const Jobseeker = () => {

    const navigate = useNavigate()

    const { job } = useContext(jobcont)
    const { user } = useContext(usercont)

    const [search, setsearch] = useState('')
    const [location, setlocation] = useState('')


    // Search + location filter
    const filteredjobs = job.filter((elem) => {

        const searchText = search.toLowerCase()
        const locationText = location.toLowerCase()

        const title = elem.title?.toLowerCase() || ''
        const company = elem.company?.toLowerCase() || ''

        const skills = elem.skills || []

        const searchMatch =
            title.includes(searchText) ||
            company.includes(searchText) ||
            skills.some(skill =>
                skill.toLowerCase().includes(searchText)
            )

        const locationMatch =
            elem.location?.toLowerCase().includes(locationText)

        return searchMatch && locationMatch
    })


    // Sirf maximum 10 jobs show hongi
    const visibleJobs = filteredjobs.slice(0, 10)


    return (

        <div className="min-h-screen bg-[#060D17] text-white">

            <Jobseekernav />


            <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">


                {/* Welcome */}
                <div className="mb-7 flex items-start justify-between">

                    <div>

                        <p className="text-sm text-white/50">

                            Welcome back{' '}

                            <span className="font-semibold uppercase text-[#5A3BD0]">
                                {user?.username}
                            </span>

                        </p>


                        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                            Find your next opportunity
                        </h1>


                        <p className="mt-2 text-sm text-white/40">
                            Discover jobs that match your skills and career goals.
                        </p>

                    </div>


                    <Logoutbtn />

                </div>


                {/* Search */}
                <div className="
                    mb-8 flex flex-col gap-3
                    rounded-xl
                    border border-white/10
                    bg-[#0B111D]
                    p-3
                    md:flex-row
                ">


                    {/* Search */}
                    <div className="relative flex-1">

                        <i className="
                            ri-search-line
                            absolute left-4 top-1/2
                            -translate-y-1/2
                            text-white/40
                        "></i>


                        <input
                            value={search}
                            onChange={(e) => setsearch(e.target.value)}
                            type="text"
                            placeholder="Job title, skills or company"
                            className="
                                w-full rounded-lg
                                border border-white/10
                                bg-[#060D17]
                                py-3 pl-11 pr-4
                                text-sm
                                outline-none
                                placeholder:text-white/30
                                focus:border-[#492DBB]
                            "
                        />

                    </div>


                    {/* Location */}
                    <div className="relative flex-1">

                        <i className="
                            ri-map-pin-line
                            absolute left-4 top-1/2
                            -translate-y-1/2
                            text-white/40
                        "></i>


                        <input
                            value={location}
                            onChange={(e) => setlocation(e.target.value)}
                            type="text"
                            placeholder="Location"
                            className="
                                w-full rounded-lg
                                border border-white/10
                                bg-[#060D17]
                                py-3 pl-11 pr-4
                                text-sm
                                outline-none
                                placeholder:text-white/30
                                focus:border-[#492DBB]
                            "
                        />

                    </div>

                </div>


                {/* Jobs Heading */}
                <div className="mb-5">

                    <h2 className="text-xl font-semibold">
                        Recommended Jobs
                    </h2>


                    <p className="mt-1 text-xs text-white/40">

                        Showing{' '}

                        {Math.min(
                            filteredjobs.length,
                            10
                        )}

                        {' '}of{' '}

                        {filteredjobs.length}

                        {' '}jobs

                    </p>

                </div>


                {/* Jobs */}
                <div className="space-y-4">


                    {visibleJobs.map((elem) => (

                        <div
                            key={elem._id}
                            className="
                                rounded-xl
                                border border-white/10
                                bg-[#0B111D]
                                p-5
                                transition
                                hover:border-[#492DBB]/60
                            "
                        >


                            {/* Top */}
                            <div className="flex gap-4">


                                {/* Company Icon */}
                                <div className="
                                    flex h-12 w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-[#492DBB]/20
                                ">

                                    <i className="
                                        ri-building-2-line
                                        text-xl
                                        text-[#8B6CFF]
                                    "></i>

                                </div>


                                {/* Job Info */}
                                <div>

                                    <h3 className="font-semibold">
                                        {elem.title}
                                    </h3>


                                    <p className="mt-1 text-sm text-white/50">
                                        {elem.company}
                                    </p>


                                    <div className="
                                        mt-2
                                        flex flex-wrap
                                        gap-3
                                        text-xs
                                        text-white/40
                                    ">


                                        {/* Location */}
                                        <span>

                                            <i className="ri-map-pin-line mr-1"></i>

                                            {elem.location}

                                        </span>


                                        {/* Job Type */}
                                        <span>

                                            <i className="ri-briefcase-line mr-1"></i>

                                            {elem.jobtype}

                                        </span>

                                    </div>

                                </div>

                            </div>


                            {/* Skills */}
                            <div className="
                                mt-4
                                flex flex-wrap
                                gap-2
                            ">

                                {(elem.skills || []).map(
                                    (skill, index) => (

                                        <span
                                            key={index}
                                            className="
                                                rounded-md
                                                bg-[#060D17]
                                                px-3 py-1
                                                text-xs
                                                text-white/60
                                            "
                                        >
                                            {skill}
                                        </span>

                                    )
                                )}

                            </div>


                            {/* Bottom */}
                            <div className="
                                mt-5
                                flex flex-col
                                gap-3
                                border-t
                                border-white/10
                                pt-4
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            ">


                                {/* Salary */}
                                <div>

                                    <span className="
                                        text-sm
                                        font-semibold
                                        text-[#8B6CFF]
                                    ">
                                        ₹{elem.salary}
                                    </span>


                                    <span className="
                                        ml-1
                                        text-xs
                                        text-white/40
                                    ">
                                        / year
                                    </span>

                                </div>


                                {/* View Job */}
                                <button
                                    onClick={() => {
                                        navigate(`/jobdetail/${elem._id}`)
                                    }}
                                    className="
                                        rounded-lg
                                        bg-[#492DBB]
                                        px-5 py-2
                                        text-sm
                                        font-semibold
                                        transition
                                        hover:bg-[#5a3bd0]
                                    "
                                >
                                    View Job
                                </button>

                            </div>

                        </div>

                    ))}


                    {/* No jobs */}
                    {filteredjobs.length === 0 && (

                        <div className="
                            py-16
                            text-center
                            text-white/40
                        ">

                            <i className="
                                ri-search-line
                                text-3xl
                            "></i>


                            <p className="mt-3">
                                No jobs found
                            </p>


                            <p className="
                                mt-1
                                text-xs
                                text-white/25
                            ">
                                Try searching with another keyword or location.
                            </p>

                        </div>

                    )}


                </div>


                {/* More jobs message */}
                {filteredjobs.length > 10 && (

                    <div onClick={()=>window.scrollTo(0, 0)} className="
                        mt-6
                        rounded-lg
                        border border-white/10
                        bg-[#0B111D]
                        px-4 py-3
                        text-center
                        text-xs
                        text-white/40
                    ">

                        Showing only the first 10 jobs.
                        Use search to find more specific opportunities.

                    </div>

                )}

            </main>

        </div>
    )
}

export default Jobseeker