import React, { useContext, useState } from 'react'
import { jobcont } from '../../context/Jobcontext'
import Categorycard from '../microcomponents/Categorycard'

const Categorysection = () => {

    const { job } = useContext(jobcont)
    const [showAll, setShowAll] = useState(false)

    const visibleJobs = showAll ? job : job.slice(0, 5)

    return (
        <div className="mt-5">

            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">
                    Top Companies Hiring
                </h1>

                <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-sm text-[#8B6CFF] hover:underline"
                >
                    {showAll ? 'View Less' : 'View More'}
                </button>
            </div>

            <div id='categorycard' className="flex flex-nowrap overflow-x-auto md:flex-wrap gap-4 mt-2">
                {visibleJobs.map((elem, idx) => (
                    <Categorycard
                        key={idx}
                        elem={elem}
                    />
                ))}
            </div>

        </div>
    )
}

export default Categorysection