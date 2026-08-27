import React from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
    const navigate= useNavigate()
    return (
        <div 
         className="bg-[#010512] max-w-full  grid grid-cols-2 md:grid-cols-4 gap-4 h-auto items-center mt-3 rounded-lg ">

            {/* Search */}
            <div  className="flex border col-span-2 md:col-span-1 items-center pl-4 border-white/50 rounded-lg">
                <i className="ri-search-line text-white/50 text-lg"></i>

                <input
                    className="w-full px-3 py-3 text-sm outline-0 bg-transparent text-white"
                    type="text"
                    placeholder="Job titles, keywords or Company"
                />
            </div>

            {/* Location Dropdown */}
            <div className="flex border items-center pl-4 border-white/50 pr-4 rounded-lg">
                <i className="ri-map-pin-line text-white/50 text-lg"></i>

                <select className="w-full text-white/50 rounded-lg outline-0 px-3 py-3 text-sm bg-transparent ">
                    <option className="bg-bgdark text-white/50" value="">
                        Select Location
                    </option>
                    <option className="bg-bgdark text-white/50" value="remote">
                        Remote
                    </option>
                    <option className="bg-bgdark text-white/50" value="delhi">
                        Delhi
                    </option>
                    <option className="bg-bgdark text-white/50" value="gurgaon">
                        Gurgaon
                    </option>
                    <option className="bg-bgdark text-white/50" value="noida">
                        Noida
                    </option>
                    <option className="bg-bgdark text-white/50" value="bangalore">
                        Bangalore
                    </option>
                    <option className="bg-bgdark text-white/50" value="mumbai">
                        Mumbai
                    </option>
                    <option className="bg-bgdark text-white/50" value="hyderabad">
                        Hyderabad
                    </option>
                    <option className="bg-bgdark text-white/50" value="pune">
                        Pune
                    </option>
                    <option className="bg-bgdark text-white/50" value="chennai">
                        Chennai
                    </option>
                </select>
            </div>

            {/* category dropdown */}
            <div className="flex border items-center pl-4 pr-4  border-white/50 rounded-lg">
                <i className="ri-briefcase-line text-white/50 text-lg"></i>

                <select className="w-full rounded-lg outline-0 px-3 py-3 text-sm bg-transparent text-white/50">
                    <option className="text-white/50 bg-bgdark" value="">
                        All Categories
                    </option>
                    <option className="text-white/50 bg-bgdark" value="development">
                        Development
                    </option>
                    <option className="text-white/50 bg-bgdark" value="design">
                        Design
                    </option>
                    <option className="text-white/50 bg-bgdark" value="marketing">
                        Marketing
                    </option>
                    <option className="text-white/50 bg-bgdark" value="sales">
                        Sales
                    </option>
                    <option className="text-white/50 bg-bgdark" value="finance">
                        Finance
                    </option>
                    <option className="text-white/50 bg-bgdark" value="hr">
                        Human Resources
                    </option>
                    <option className="text-white/50 bg-bgdark" value="engineering">
                        Engineering
                    </option>
                </select>
            </div>

            <button onClick={()=>navigate('/login')}
             className="rounded-lg col-span-2 md:col-span-1 text-center bg-[#492DBB] hover:bg-[#5a3bce] text-white px-3 py-3 text-sm transition">
                Search Jobs
            </button>

        </div>
    )
}

export default Searchbar