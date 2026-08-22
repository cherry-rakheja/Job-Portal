import React from 'react'
import { useNavigate } from 'react-router-dom'

const Jobdetailnav = () => {
    const navigate= useNavigate()
  return (
         <nav className="border-b border-white/10 bg-[#0B111D]">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">

                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
                    >
                        <i className="ri-arrow-left-line"></i>
                        Back to Jobs
                    </button>

                    <button className="text-white/50 transition hover:text-white">
                        <i className="ri-bookmark-line text-xl"></i>
                    </button>

                </div>
            </nav>
  )
}

export default Jobdetailnav
