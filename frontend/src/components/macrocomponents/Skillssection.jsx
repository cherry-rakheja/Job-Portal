import React, { useContext, useState } from 'react'
import { jobcont } from '../../context/Jobcontext'
import Categorycard from '../microcomponents/Categorycard';
import Skillscard from '../microcomponents/Skillscard';

const Skillssection = () => {
    const { job } = useContext(jobcont)
    const [showall, setshowall] = useState(false);
    const visibleskills = showall ? job : job.slice(0, 3)
    const allskills= visibleskills.flatMap((elem)=>elem.skills)
    const uniqueskills=[...new Set(allskills)]
    return (
        <div className='mt-5 '>
            <div className=' flex justify-between'>
                <h1 className='text-xl font-semibold'>Popular Skills</h1>
                <button onClick={() => {
                    setshowall(!showall)
                }}
                    className="text-sm text-[#8B6CFF] hover:underline">
                    {showall ? 'View Less' : 'View More'}
                </button>
                </div>
                <div id='categorycard' className="flex flex-nowrap overflow-x-auto md:flex-wrap gap-4 mt-2">
                    {
                        uniqueskills.map((elem,idx)=>{
                            return <Skillscard key={idx} elem={elem}/>
                        })
                    }
                </div>
            
        </div>
    )
}

export default Skillssection
