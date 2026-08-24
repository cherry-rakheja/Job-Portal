import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTASection = () => {

    const navigate = useNavigate()

    return (
        <section onClick={()=>navigate('/login')} className="mt-16">

            <div
                className="
                    relative overflow-hidden
                    rounded-3xl
                    border border-[#8B6CFF]/20
                    bg-linear-to-br
                    from-[#24145C]
                    via-[#15152D]
                    to-[#0B111D]
                    px-6 py-12
                    md:px-12 md:py-16
                "
            >

                {/* Glow */}
                <div className="
                    absolute -right-20 -top-20
                    h-64 w-64
                    rounded-full
                    bg-[#492DBB]/30
                    blur-3xl
                "></div>

                <div className="
                    absolute -bottom-24 -left-20
                    h-56 w-56
                    rounded-full
                    bg-[#8B6CFF]/10
                    blur-3xl
                "></div>


                {/* Content */}
                <div className="relative z-10 text-center">

                    <div className="
                        mx-auto flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        bg-white/10
                        border border-white/10
                    ">
                        <i className="ri-rocket-2-line text-2xl text-[#B09FFF]"></i>
                    </div>


                    <h2 className="mt-6 text-2xl md:text-4xl font-bold">
                        Ready for your next opportunity?
                    </h2>

                    <p className="
                        mx-auto mt-3 max-w-xl
                        text-sm md:text-base
                        leading-6 text-white/60
                    ">
                        Discover exciting opportunities, connect with great
                        companies and take the next step in your career.
                    </p>


                    <div className="
                        mt-7 flex flex-col
                        items-center justify-center
                        gap-3 sm:flex-row
                    ">

                        <button
                            onClick={() => navigate('/jobseeker')}
                            className="
                                w-full sm:w-auto
                                rounded-lg
                                bg-[#492DBB]
                                px-7 py-3
                                text-sm font-semibold
                                transition
                                hover:bg-[#5A3BD0]
                                hover:shadow-lg
                                hover:shadow-[#492DBB]/20
                            "
                        >
                            Explore Jobs
                        </button>


                        <button
                            
                            className="
                                w-full sm:w-auto
                                rounded-lg
                                border border-white/15
                                bg-white/5
                                px-7 py-3
                                text-sm font-semibold
                                text-white/80
                                transition
                                hover:bg-white/10
                                hover:text-white
                            "
                        >
                            Hire Talent
                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default CTASection