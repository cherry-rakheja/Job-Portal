import React from 'react'

const Categorycard = ({ elem }) => {

    return (
        <div
            className="
                group relative shrink-0
                min-w-45 md:min-w-50
                rounded-xl
                border border-white/10
                bg-[#0B111D]
                px-4 py-4
                overflow-hidden
                cursor-pointer
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#6D52E8]/50
                hover:bg-[#101827]
                hover:shadow-[0_10px_30px_rgba(73,45,187,0.15)]
            "
        >

            {/* Glow */}
            <div
                className="
                    absolute -right-6 -top-6
                    h-16 w-16
                    rounded-full
                    bg-[#492DBB]/20
                    blur-2xl
                    transition-all duration-300
                    group-hover:bg-[#6D52E8]/30
                "
            ></div>


            {/* Icon */}
            <div
                className="
                    relative mb-3
                    flex h-9 w-9
                    items-center justify-center
                    rounded-lg
                    bg-[#492DBB]/15
                    border border-[#8B6CFF]/20
                "
            >
                <i className="ri-building-4-line text-lg text-[#9B83FF]"></i>
            </div>


            {/* Company */}
            <p className="relative truncate text-sm md:text-base font-semibold text-white">
                {elem.company}
            </p>


            {/* Salary */}
            <div className="relative mt-2 flex items-center gap-1.5">

                <i className="ri-money-rupee-circle-line text-sm text-emerald-400"></i>

                <span className="text-xs md:text-sm text-white/50">
                    {elem.salary}
                </span>

            </div>

        </div>
    )
}

export default Categorycard
