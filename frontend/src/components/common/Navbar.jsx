import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbtn from './Navbtn'

const Navbar = () => {
    const [menuopen, setmenuopen] = useState(false);
    const navigate= useNavigate()
    return (
        <>
        <nav  className='hidden md:flex px-6 items-center justify-between py-5 max-w-full h-auto   '>
            <div className='flex items-center gap-4'>
                <i className="ri-briefcase-2-fill text-[#6041C6] text-2xl"></i>
                <h1 className='text-3xl font-semibold'>Apna<span className='bg-linear-to-r from-[#B9A7FF] via-[#5A43C7] to-[#B9A7FF]   bg-clip-text text-transparent'>Career</span></h1>
            </div>
            <div className="text-[#D2D3D4] font-medium flex items-center gap-10">
                <Link className="relative group">
                    Home
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#8B5CF6] transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>

                <Link className="relative group">
                    Jobs
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#8B5CF6] transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>

                <Link className="relative group">
                    Companies
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#8B5CF6] transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>

                <Link className="relative group">
                    How it Works
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#8B5CF6] transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>

                <Link className="relative group">
                    Blog
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#8B5CF6] transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
            </div>
            <Navbtn/>
        </nav>
        <nav  className='md:hidden flex relative  max-w-full items-center justify-between py-4 px-7'>
            <div className='flex items-center gap-4'>
                <i className="ri-briefcase-2-fill text-[#6041C6] text-2xl"></i>
            <h1 className='text-3xl font-semibold'>Apna<span className='bg-linear-to-r from-[#B9A7FF] via-[#5A43C7] to-[#B9A7FF]   bg-clip-text text-transparent'>Career</span></h1>
            </div>
            <i onClick={()=>{
                setmenuopen(!menuopen)
            }} className= {menuopen?"ri-close-large-line text-xl":"ri-menu-line text-2xl"}
            ></i>
            {menuopen&& ( <div className="absolute z-3 top-full right-7 mt-2 w-48 bg-[#010512] rounded-lg p-5 flex flex-col gap-5 text-[#D2D3D4] font-medium">
            
            <Link to="/">Home</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/companies">Companies</Link>
            <Link to="/how-it-works">How it Works</Link>
            <Link to="/blog">Blog</Link>

        </div>)}
        </nav>
        </>
    )
}

export default Navbar
