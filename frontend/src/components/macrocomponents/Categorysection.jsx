import React, { useContext, useState } from 'react'
import { jobcont } from '../../context/Jobcontext'
import Categorycard from '../microcomponents/Categorycard'
import { useNavigate } from 'react-router-dom'

const Categorysection = () => {
    const navigate= useNavigate()

    const { job } = useContext(jobcont)
    const [showAll, setShowAll] = useState(false)

    const visibleJobs = showAll ? job : job.slice(0, 5)

    return (
        <section onClick={()=>navigate('/login')} className="mt-10">

            {/* Heading */}
            <div className="flex items-end justify-between mb-5">

                <div>
                    <p className="text-xs uppercase tracking-widest text-[#8B6CFF] font-medium mb-1">
                        Explore opportunities
                    </p>

                    <h1 className="text-xl md:text-2xl font-semibold text-white">
                        Top Companies Hiring
                    </h1>
                </div>

                <button
                    onClick={() => setShowAll(!showAll)}
                    className="group flex items-center gap-1 text-sm text-[#9B83FF] hover:text-white transition-colors"
                >
                    {showAll ? 'View Less' : 'View More'}

                    <i
                        className={`ri-arrow-right-line transition-transform duration-300 ${
                            showAll ? '-rotate-90' : 'group-hover:translate-x-1'
                        }`}
                    ></i>
                </button>

            </div>


            {/* Cards */}
            <div
                id="categorycard"
                className="flex flex-nowrap md:flex-wrap gap-3 md:gap-4 overflow-x-auto md:overflow-visible pb-3 scrollbar-hide"
            >

                {visibleJobs.map((elem, idx) => (
                    <Categorycard
                        key={idx}
                        elem={elem}
                    />
                ))}

            </div>

        </section>
    )
}

export default Categorysection