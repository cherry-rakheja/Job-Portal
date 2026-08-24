import React from 'react'

const Skillscard = ({ elem }) => {

    return (
        <div
            className="
                group relative shrink-0
                rounded-xl
                border border-white/10
                bg-[#0B111D]
                px-4 py-3
                cursor-pointer
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#6D52E8]/50
                hover:bg-[#101827]
                hover:shadow-[0_10px_30px_rgba(73,45,187,0.15)]
            "
        >

            <div className="flex items-center gap-3">

                {/* Icon */}
                <div
                    className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-lg
                        bg-[#492DBB]/15
                        border border-[#8B6CFF]/20
                    "
                >
                    <i className="ri-code-s-slash-line text-[#9B83FF]"></i>
                </div>


                {/* Skill */}
                <p className="text-sm md:text-base font-medium text-white">
                    {elem}
                </p>

            </div>

        </div>
    )
}

export default Skillscard