import React, { useContext, useState } from 'react'
import { jobcont } from '../../context/Jobcontext'
import Skillscard from '../microcomponents/Skillscard'
import { useNavigate } from 'react-router-dom'

const Skillssection = () => {
    const navigate= useNavigate()

    const { job } = useContext(jobcont)

    const [showall, setshowall] = useState(false)

    const visibleskills = showall
        ? job
        : job.slice(0, 3)

    const allskills = visibleskills.flatMap(
        (elem) => elem.skills || []
    )

    const uniqueskills = [...new Set(allskills)]


    return (
        <section onClick={()=>navigate('/login')} className="mt-10">

            {/* Heading */}
            <div className="flex items-end justify-between mb-5">

                <div>
                    <p className="text-xs uppercase tracking-widest text-[#8B6CFF] font-medium mb-1">
                        Build your career
                    </p>

                    <h1 className="text-xl md:text-2xl font-semibold text-white">
                        Popular Skills
                    </h1>
                </div>


                <button
                    onClick={() => setshowall(!showall)}
                    className="group flex items-center gap-1 text-sm text-[#9B83FF] hover:text-white transition-colors"
                >

                    {showall ? 'View Less' : 'View More'}

                    <i
                        className={`ri-arrow-right-line transition-transform duration-300 ${
                            showall
                                ? '-rotate-90'
                                : 'group-hover:translate-x-1'
                        }`}
                    ></i>

                </button>

            </div>


            {/* Skills */}
            <div
                id="categorycard"
                className="
                    flex flex-nowrap md:flex-wrap
                    gap-3 md:gap-4
                    overflow-x-auto md:overflow-visible
                    pb-3 scrollbar-hide
                "
            >

                {uniqueskills.map((elem, idx) => (
                    <Skillscard
                        key={idx}
                        elem={elem}
                    />
                ))}

            </div>

        </section>
    )
}

export default Skillssection
