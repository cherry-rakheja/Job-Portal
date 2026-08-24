import React from 'react'
import img from '../../assets/jobportalheroimg.png'
import { useNavigate } from 'react-router-dom'

const Heroimg = () => {
    const navigate= useNavigate()
    return (
        <div
            className="w-full z-5 md:h-100 mt-4 h-50 bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div  onClick={()=>navigate('/login')} className="flex gap-4 absolute bottom-8 left-[15%]">
                <button className="bg-bgpurple text-xs hover:bg-bgpurple/70 md:text-lg font-semibold rounded-lg text-white px-5 py-2">
                    Browse Jobs
                </button>

                <button className="bg-transparent hover:bg-white/10 md:text-lg text-xs border-2 border-bgpurple/40 font-semibold rounded-lg text-white px-5 py-2">
                    Post a Job
                </button>
            </div>
        </div>
    )
}

export default Heroimg