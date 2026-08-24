import React from 'react'

const Stats = () => {

    const stats = [
        {
            title: 'Active Jobs',
            value: '500+',
            icon: 'ri-briefcase-4-line',
            color: 'text-[#8B6CFF]',
            bg: 'bg-[#8B6CFF]/10'
        },
        {
            title: 'Companies',
            value: '100+',
            icon: 'ri-building-4-line',
            color: 'text-blue-400',
            bg: 'bg-blue-400/10'
        },
        {
            title: 'Job Seekers',
            value: '2K+',
            icon: 'ri-user-search-line',
            color: 'text-emerald-400',
            bg: 'bg-emerald-400/10'
        },
        {
            title: 'Successful Hires',
            value: '500+',
            icon: 'ri-user-follow-line',
            color: 'text-orange-400',
            bg: 'bg-orange-400/10'
        }
    ]

    return (

        <section className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">

            {stats.map((stat, index) => (

                <div
                    key={index}
                    className="
                        group rounded-xl
                        border border-white/10
                        bg-[#0B111D]
                        p-4 md:p-5
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-white/20
                        hover:bg-[#0e1624]
                    "
                >

                    <div className="flex items-center justify-between">

                        <div
                            className={`
                                flex h-9 w-9 items-center justify-center
                                rounded-lg
                                ${stat.bg}
                            `}
                        >
                            <i
                                className={`${stat.icon} ${stat.color} text-lg`}
                            ></i>
                        </div>

                    </div>

                    <h2 className="mt-4 text-xl md:text-2xl font-bold text-white">
                        {stat.value}
                    </h2>

                    <p className="mt-1 text-xs md:text-sm text-white/50">
                        {stat.title}
                    </p>

                </div>

            ))}

        </section>

    )
}

export default Stats
