import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { jobcont } from '../../context/Jobcontext'

const LatestJob = () => {

    const { job } = useContext(jobcont)
    const navigate = useNavigate()

    const latestJobs = job?.slice(0, 6) || []

    return (
        <section onClick={()=>navigate('/login')} className="mt-16">

            {/* Heading */}
            <div className="flex items-end justify-between">

                <div>
                    <p className="text-xs uppercase tracking-widest text-[#8B6CFF] font-medium">
                        Opportunities
                    </p>

                    <h2 className="mt-1 text-xl md:text-2xl font-bold">
                        Latest Jobs
                    </h2>

                    <p className="mt-2 text-sm text-white/50">
                        Explore the latest opportunities from top companies.
                    </p>
                </div>


                <button
                    onClick={() => navigate('/jobseeker')}
                    className="
                        hidden md:flex
                        items-center gap-1
                        text-sm text-[#9B83FF]
                        transition hover:text-white
                    "
                >
                    View All Jobs
                    <i className="ri-arrow-right-line"></i>
                </button>

            </div>


            {/* Jobs */}
            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                {latestJobs.map((elem, idx) => (

                    <div
                        key={elem._id || idx}
                        className="
                            group rounded-2xl
                            border border-white/10
                            bg-[#0B111D]
                            p-5
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-[#6D52E8]/40
                            hover:shadow-[0_15px_35px_rgba(73,45,187,0.12)]
                        "
                    >

                        {/* Company + Icon */}
                        <div className="flex items-start justify-between">

                            <div className="
                                flex h-11 w-11
                                items-center justify-center
                                rounded-xl
                                bg-[#492DBB]/15
                                border border-[#8B6CFF]/20
                            ">
                                <i className="ri-building-line text-xl text-[#9B83FF]"></i>
                            </div>

                            <button
                                className="
                                    flex h-9 w-9 items-center justify-center
                                    rounded-lg
                                    border border-white/10
                                    text-white/40
                                    transition
                                    hover:border-[#8B6CFF]/30
                                    hover:text-[#9B83FF]
                                "
                            >
                                <i className="ri-bookmark-line"></i>
                            </button>

                        </div>


                        {/* Job title */}
                        <h3 className="
                            mt-5
                            truncate
                            text-lg font-semibold
                            group-hover:text-[#A794FF]
                            transition
                        ">
                            {elem.title || elem.jobtitle || 'Job Opportunity'}
                        </h3>


                        {/* Company */}
                        <p className="mt-1 text-sm text-white/50">
                            {elem.company || 'Company'}
                        </p>


                        {/* Location */}
                        <div className="mt-4 flex items-center gap-2 text-xs text-white/50">

                            <i className="ri-map-pin-line text-[#8B6CFF]"></i>

                            <span>
                                {elem.location || 'Location not specified'}
                            </span>

                        </div>


                        {/* Salary */}
                        <div className="mt-2 flex items-center gap-2 text-xs text-white/50">

                            <i className="ri-money-rupee-circle-line text-emerald-400"></i>

                            <span>
                                {elem.salary || 'Salary not specified'}
                            </span>

                        </div>


                        {/* Skills */}
                        <div className="mt-4 flex flex-wrap gap-2">

                            {(elem.skills || []).slice(0, 3).map((skill, skillIndex) => (

                                <span
                                    key={skillIndex}
                                    className="
                                        rounded-md
                                        bg-white/5
                                        px-2.5 py-1
                                        text-[11px]
                                        text-white/60
                                    "
                                >
                                    {skill}
                                </span>

                            ))}

                        </div>


                        {/* Button */}
                        <button
                            onClick={() => navigate(`/jobdetail?id=${elem._id}`)}
                            className="
                                mt-5 w-full
                                rounded-lg
                                border border-[#8B6CFF]/30
                                bg-[#492DBB]/10
                                py-2.5
                                text-sm font-medium
                                text-[#A794FF]
                                transition
                                hover:bg-[#492DBB]
                                hover:text-white
                            "
                        >
                            View Job
                        </button>

                    </div>

                ))}

            </div>


            {/* Mobile button */}
            <button
                onClick={() => navigate('/jobseeker')}
                className="
                    mt-5 flex w-full items-center justify-center gap-1
                    rounded-lg border border-white/10
                    bg-[#0B111D]
                    py-3 text-sm text-white/60
                    md:hidden
                "
            >
                View All Jobs
                <i className="ri-arrow-right-line"></i>
            </button>

        </section>
    )
}

export default LatestJob