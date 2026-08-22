import React from 'react'
import { useNavigate } from 'react-router-dom'
import Jobdetailnav from '../components/macrocomponents/Jobdetailnav'

const Jobdetail = () => {

    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-[#060D17] text-white">

            {/* Navbar */}
       <Jobdetailnav/>


            <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">

                {/* Job Header */}
                <section className="rounded-2xl border border-white/10 bg-[#0B111D] p-6 sm:p-8">

                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                        <div className="flex gap-4">

                            {/* Company Logo */}
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#492DBB]/20">
                                <i className="ri-building-2-line text-3xl text-[#8B6CFF]"></i>
                            </div>

                            <div>

                                <h1 className="text-2xl font-bold sm:text-3xl">
                                    Frontend Developer
                                </h1>

                                <p className="mt-2 text-sm text-white/50">
                                    Tech Solutions
                                </p>

                                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/40">

                                    <span>
                                        <i className="ri-map-pin-line mr-1"></i>
                                        Delhi, India
                                    </span>

                                    <span>
                                        <i className="ri-briefcase-line mr-1"></i>
                                        Full Time
                                    </span>

                                    <span>
                                        <i className="ri-time-line mr-1"></i>
                                        Posted 2 days ago
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* Apply */}
                        <button
                            className="rounded-lg bg-[#492DBB] px-8 py-3 text-sm font-semibold transition hover:bg-[#5A3BD0]"
                        >
                            Apply Now
                        </button>

                    </div>

                </section>


                {/* Main Content */}
                <div className="mt-6 grid gap-6 lg:grid-cols-3">


                    {/* Left Content */}
                    <div className="space-y-6 lg:col-span-2">


                        {/* Description */}
                        <section className="rounded-2xl border border-white/10 bg-[#0B111D] p-6 sm:p-7">

                            <h2 className="text-lg font-semibold">
                                Job Description
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/50">
                                We are looking for a passionate Frontend Developer
                                to join our growing team. You will be responsible
                                for building modern, responsive and user-friendly
                                web applications.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-white/50">
                                You will work closely with designers, backend
                                developers and product managers to create
                                high-quality digital experiences.
                            </p>

                        </section>


                        {/* Responsibilities */}
                        <section className="rounded-2xl border border-white/10 bg-[#0B111D] p-6 sm:p-7">

                            <h2 className="text-lg font-semibold">
                                Responsibilities
                            </h2>

                            <ul className="mt-5 space-y-4">

                                <li className="flex gap-3 text-sm text-white/50">
                                    <i className="ri-checkbox-circle-line mt-0.5 text-[#8B6CFF]"></i>
                                    Build responsive web applications using React.
                                </li>

                                <li className="flex gap-3 text-sm text-white/50">
                                    <i className="ri-checkbox-circle-line mt-0.5 text-[#8B6CFF]"></i>
                                    Work with designers to implement UI designs.
                                </li>

                                <li className="flex gap-3 text-sm text-white/50">
                                    <i className="ri-checkbox-circle-line mt-0.5 text-[#8B6CFF]"></i>
                                    Integrate REST APIs with frontend applications.
                                </li>

                                <li className="flex gap-3 text-sm text-white/50">
                                    <i className="ri-checkbox-circle-line mt-0.5 text-[#8B6CFF]"></i>
                                    Write clean and maintainable code.
                                </li>

                            </ul>

                        </section>


                        {/* Skills */}
                        <section className="rounded-2xl border border-white/10 bg-[#0B111D] p-6 sm:p-7">

                            <h2 className="text-lg font-semibold">
                                Required Skills
                            </h2>

                            <div className="mt-5 flex flex-wrap gap-2">

                                {[
                                    'React',
                                    'JavaScript',
                                    'HTML',
                                    'CSS',
                                    'Tailwind CSS',
                                    'Git'
                                ].map((skill) => (

                                    <span
                                        key={skill}
                                        className="rounded-lg border border-white/10 bg-[#060D17] px-4 py-2 text-xs text-white/60"
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </section>


                    </div>


                    {/* Right Sidebar */}
                    <aside className="space-y-6">


                        {/* Job Overview */}
                        <section className="rounded-2xl border border-white/10 bg-[#0B111D] p-6">

                            <h2 className="text-lg font-semibold">
                                Job Overview
                            </h2>


                            <div className="mt-6 space-y-6">


                                <div className="flex gap-3">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#492DBB]/15">
                                        <i className="ri-money-rupee-circle-line text-[#8B6CFF]"></i>
                                    </div>

                                    <div>
                                        <p className="text-xs text-white/35">
                                            Salary
                                        </p>

                                        <p className="mt-1 text-sm font-medium">
                                            ₹6 - ₹8 LPA
                                        </p>
                                    </div>

                                </div>


                                <div className="flex gap-3">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#492DBB]/15">
                                        <i className="ri-briefcase-line text-[#8B6CFF]"></i>
                                    </div>

                                    <div>
                                        <p className="text-xs text-white/35">
                                            Job Type
                                        </p>

                                        <p className="mt-1 text-sm font-medium">
                                            Full Time
                                        </p>
                                    </div>

                                </div>


                                <div className="flex gap-3">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#492DBB]/15">
                                        <i className="ri-map-pin-line text-[#8B6CFF]"></i>
                                    </div>

                                    <div>
                                        <p className="text-xs text-white/35">
                                            Location
                                        </p>

                                        <p className="mt-1 text-sm font-medium">
                                            Delhi, India
                                        </p>
                                    </div>

                                </div>


                                <div className="flex gap-3">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#492DBB]/15">
                                        <i className="ri-calendar-line text-[#8B6CFF]"></i>
                                    </div>

                                    <div>
                                        <p className="text-xs text-white/35">
                                            Posted
                                        </p>

                                        <p className="mt-1 text-sm font-medium">
                                            2 days ago
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* Company */}
                        <section className="rounded-2xl border border-white/10 bg-[#0B111D] p-6">

                            <h2 className="text-lg font-semibold">
                                About Company
                            </h2>

                            <div className="mt-5 flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#492DBB]/20">
                                    <i className="ri-building-2-line text-xl text-[#8B6CFF]"></i>
                                </div>

                                <div>
                                    <p className="text-sm font-medium">
                                        Tech Solutions
                                    </p>

                                    <p className="text-xs text-white/35">
                                        Software & Technology
                                    </p>
                                </div>

                            </div>

                            <p className="mt-4 text-xs leading-6 text-white/40">
                                We build innovative technology solutions that
                                help businesses grow and create better digital
                                experiences.
                            </p>

                            <button className="mt-4 text-xs font-medium text-[#8B6CFF] hover:underline">
                                View Company
                            </button>

                        </section>


                        {/* Apply Card */}
                        <section className="rounded-2xl border border-[#492DBB]/30 bg-[#492DBB]/10 p-6">

                            <h3 className="font-semibold">
                                Ready to apply?
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-white/40">
                                Take the next step towards your career.
                            </p>

                            <button
                                className="mt-5 w-full rounded-lg bg-[#492DBB] py-3 text-sm font-semibold hover:bg-[#5A3BD0]"
                            >
                                Apply Now
                            </button>

                        </section>

                    </aside>

                </div>

            </main>

        </div>
    )
}

export default Jobdetail
