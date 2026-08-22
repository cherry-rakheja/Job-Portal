import React, { useContext } from 'react'


const Categorycard = ({elem}) => {

    return (

        <div  className='flex flex-col shrink-0 w-fit px-3 py-1 md:px-6 md:py-2 bg-[#0B111D]  mt-4 border border-white/50 rounded-lg '>
            <p className='text-sm md:text-lg font-medium'>{elem.company}</p>
            <span className='text-white/50 text-xs md:text-sm'>{elem.salary}</span>
        </div>


    )
}

export default Categorycard
