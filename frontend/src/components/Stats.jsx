import React from 'react'

const Stats = () => {
  return (
    <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">

                    <div className="rounded-xl border border-white/10 bg-[#0B111D] p-4">
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-white/50">
                                Applied Jobs
                            </p>

                            <i className="ri-send-plane-line text-[#8B6CFF]"></i>
                        </div>

                        <h2 className="mt-2 text-2xl font-bold">
                            12
                        </h2>
                    </div>


                    

                </section>

  )
}

export default Stats
