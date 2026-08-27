import React from 'react'
import { Link } from 'react-router-dom'
import Jobseekerdb from '../../pages/Jobseekerdb'

const Jobseekernav = () => {
  return (
     <nav className="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-10">
                <div className="mx-auto flex max-w-7xl items-center justify-between">

                    <h1 className='text-3xl font-semibold'>Apna<span className='bg-linear-to-r from-[#B9A7FF] via-[#5A43C7] to-[#B9A7FF]   bg-clip-text text-transparent'>Career</span></h1>

                    <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
                        <Link to='/jobseekerdashboard' className="text-white">
                            Dashboard
                        </Link>

                        <Link to='/jobseeker' >
                            Jobs
                        </Link>

                        <Link>
                            Applications
                        </Link>
                    </div>

                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#492DBB]">
                        <i className="ri-user-line"></i>
                    </button>

                </div>
            </nav>
  )
}

export default Jobseekernav
