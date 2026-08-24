import React from 'react'
import { useNavigate } from 'react-router-dom'

const WhyChooseUs = () => {
    const navigate= useNavigate()

    const features = [
        {
            icon: 'ri-search-line',
            title: 'Easy Job Search',
            description:
                'Find relevant job opportunities quickly with our simple and powerful search.',
            color: 'text-[#8B6CFF]',
            bg: 'bg-[#8B6CFF]/10'
        },
        {
            icon: 'ri-building-4-line',
            title: 'Trusted Companies',
            description:
                'Explore opportunities from companies looking for talented professionals.',
            color: 'text-blue-400',
            bg: 'bg-blue-400/10'
        },
        {
            icon: 'ri-flashlight-line',
            title: 'Quick Apply',
            description:
                'Apply to your favorite jobs easily and take the next step in your career.',
            color: 'text-emerald-400',
            bg: 'bg-emerald-400/10'
        }
    ]

    return (
        <section onClick={()=>navigate('/login')} className="mt-16">

            {/* Heading */}
            <div className="text-center">

                <p className="text-xs uppercase tracking-widest text-[#8B6CFF] font-medium">
                    Why choose us
                </p>

                <h2 className="mt-2 text-2xl md:text-3xl font-bold">
                    Everything you need to find your next job
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm text-white/50">
                    We make job searching simple, fast and convenient so
                    you can focus on building your career.
                </p>

            </div>


            {/* Cards */}
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">

                {features.map((feature, index) => (

                    <div
                        key={index}
                        className="
                            group rounded-2xl
                            border border-white/10
                            bg-[#0B111D]
                            p-6
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-white/20
                            hover:bg-[#0e1624]
                        "
                    >

                        <div
                            className={`
                                flex h-12 w-12 items-center justify-center
                                rounded-xl
                                ${feature.bg}
                            `}
                        >
                            <i
                                className={`${feature.icon} ${feature.color} text-xl`}
                            ></i>
                        </div>


                        <h3 className="mt-5 text-lg font-semibold">
                            {feature.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/50">
                            {feature.description}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    )
}

export default WhyChooseUs