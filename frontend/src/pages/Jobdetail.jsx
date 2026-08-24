import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Jobdetailnav from '../components/macrocomponents/Jobdetailnav'
import { jobcont } from '../context/Jobcontext'

const Jobdetail = () => {
    const navigate= useNavigate()
    const { id } = useParams()
    const { job } = useContext(jobcont)

    const selectedJob = job.find(
        (elem) => elem._id === id
    )

    // Job load hone tak / invalid ID
    if (!selectedJob) {
        return (
            <div className="min-h-screen bg-[#060D17] text-white">

                <Jobdetailnav />

                <div className="flex min-h-[70vh] items-center justify-center">

                    <div className="text-center">

                        <i className="ri-error-warning-line text-4xl text-[#8B6CFF]"></i>

                        <h1 className="mt-4 text-xl font-semibold">
                            Job Not Found
                        </h1>

                        <p className="mt-2 text-sm text-white/40">
                            This job may have been removed or is no longer available.
                        </p>

                    </div>

                </div>

            </div>
        )
    }


    return (

        <div className="min-h-screen bg-[#060D17] text-white">

            <Jobdetailnav />


            <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">


                {/* Header */}
                <section className="
                    rounded-2xl
                    border border-white/10
                    bg-[#0B111D]
                    p-6
                ">

                    <div className="
                        flex flex-col gap-5
                        md:flex-row
                        md:items-center
                        md:justify-between
                    ">


                        <div className="flex gap-4">

                            <div className="
                                flex h-14 w-14 shrink-0
                                items-center justify-center
                                rounded-xl
                                bg-[#492DBB]/20
                            ">
                                <i className="
                                    ri-building-2-line
                                    text-2xl
                                    text-[#8B6CFF]
                                "></i>
                            </div>


                            <div>

                                <h1 className="text-2xl font-bold">
                                    {selectedJob.title}
                                </h1>

                                <p className="mt-1 text-sm text-white/50">
                                    {selectedJob.company}
                                </p>


                                <div className="
                                    mt-3 flex flex-wrap gap-4
                                    text-xs text-white/40
                                ">

                                    <span>
                                        <i className="ri-map-pin-line mr-1"></i>
                                        {selectedJob.location}
                                    </span>

                                    <span>
                                        <i className="ri-briefcase-line mr-1"></i>
                                        {selectedJob.jobtype}
                                    </span>

                                </div>

                            </div>

                        </div>


                        <button onClick={()=>navigate(`/jobdetail/${selectedJob._id}/apply`)} 
                        className="
                            rounded-lg
                            bg-[#492DBB]
                            px-7 py-3
                            text-sm font-semibold
                            hover:bg-[#5A3BD0]
                        ">
                            Apply Now
                        </button>

                    </div>

                </section>


                {/* Content */}
                <div className="
                    mt-6 grid gap-6
                    lg:grid-cols-3
                ">


                    {/* Left */}
                    <div className="
                        space-y-6
                        lg:col-span-2
                    ">


                        {/* Description */}
                        <section className="
                            rounded-2xl
                            border border-white/10
                            bg-[#0B111D]
                            p-6
                        ">

                            <h2 className="font-semibold">
                                Job Description
                            </h2>

                            <p className="
                                mt-4
                                text-sm
                                leading-7
                                text-white/50
                            ">
                                {selectedJob.description}
                            </p>

                        </section>


                        {/* Skills */}
                        <section className="
                            rounded-2xl
                            border border-white/10
                            bg-[#0B111D]
                            p-6
                        ">

                            <h2 className="font-semibold">
                                Required Skills
                            </h2>


                            <div className="
                                mt-4
                                flex flex-wrap gap-2
                            ">

                                {(selectedJob.skills || []).map(
                                    (skill, index) => (

                                        <span
                                            key={index}
                                            className="
                                                rounded-lg
                                                border border-white/10
                                                bg-[#060D17]
                                                px-3 py-2
                                                text-xs
                                                text-white/60
                                            "
                                        >
                                            {skill}
                                        </span>

                                    )
                                )}

                            </div>

                        </section>


                        {/* Responsibilities */}
                        {selectedJob.responsibilities && (

                            <section className="
                                rounded-2xl
                                border border-white/10
                                bg-[#0B111D]
                                p-6
                            ">

                                <h2 className="font-semibold">
                                    Responsibilities
                                </h2>

                                <p className="
                                    mt-4
                                    text-sm
                                    leading-7
                                    text-white/50
                                ">
                                    {selectedJob.responsibilities}
                                </p>

                            </section>

                        )}

                    </div>


                    {/* Right */}
                    <aside>

                        <section className="
                            rounded-2xl
                            border border-white/10
                            bg-[#0B111D]
                            p-6
                        ">

                            <h2 className="font-semibold">
                                Job Overview
                            </h2>


                            <div className="mt-5 space-y-5">


                                <div className="flex gap-3">

                                    <i className="
                                        ri-money-rupee-circle-line
                                        text-[#8B6CFF]
                                    "></i>

                                    <div>

                                        <p className="text-xs text-white/35">
                                            Salary
                                        </p>

                                        <p className="mt-1 text-sm">
                                            ₹{selectedJob.salary}
                                        </p>

                                    </div>

                                </div>


                                <div className="flex gap-3">

                                    <i className="
                                        ri-briefcase-line
                                        text-[#8B6CFF]
                                    "></i>

                                    <div>

                                        <p className="text-xs text-white/35">
                                            Job Type
                                        </p>

                                        <p className="mt-1 text-sm">
                                            {selectedJob.jobtype}
                                        </p>

                                    </div>

                                </div>


                                <div className="flex gap-3">

                                    <i className="
                                        ri-map-pin-line
                                        text-[#8B6CFF]
                                    "></i>

                                    <div>

                                        <p className="text-xs text-white/35">
                                            Location
                                        </p>

                                        <p className="mt-1 text-sm">
                                            {selectedJob.location}
                                        </p>

                                    </div>

                                </div>


                            </div>

                        </section>


                        {/* Apply */}
                        <section className="
                            mt-6
                            rounded-2xl
                            border border-[#492DBB]/30
                            bg-[#492DBB]/10
                            p-6
                        ">

                            <h3 className="font-semibold">
                                Ready to apply?
                            </h3>

                            <p className="
                                mt-2
                                text-xs
                                text-white/40
                            ">
                                Take the next step towards your career.
                            </p>

                            <button onClick={()=>navigate(`/jobdetail/${selectedJob._id}/apply`)} className="
                                mt-4
                                w-full
                                rounded-lg
                                bg-[#492DBB]
                                py-3
                                text-sm
                                font-semibold
                                hover:bg-[#5A3BD0]
                            ">
                                Apply Now
                            </button>

                        </section>

                    </aside>

                </div>

            </main>

        </div>
    )
}

export default Jobdetail