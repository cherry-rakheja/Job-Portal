import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Jobdetailnav from '../components/macrocomponents/Jobdetailnav'
import api from '../service/axios'

const Applyform = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [resume, setResume] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {

        e.preventDefault()

        setError('')

        if (!resume) {
            setError('Please select your resume')
            return
        }

        try {

            setLoading(true)

            const formData = new FormData()

            // Must be same as upload.single('resume')
            formData.append('resume', resume)

            const response = await api.post(
                `/application/${id}/apply`,
                formData,
                {
                    withCredentials: true
                }
            )

            console.log('APPLICATION RESPONSE:', response.data)

            alert('Application submitted successfully')

            navigate('/jobseeker')

        } 

            catch (error) {
    console.log('STATUS:', error.response?.status)
    console.log('DATA:', error.response?.data)
    console.log('ERROR:', error)

    setError(
        error.response?.data?.message ||
        'Something went wrong. Please try again.'
    )


            setError(
                error.response?.data?.message ||
                'Something went wrong. Please try again.'
            )

        } finally {

            setLoading(false)

        }
    }


    return (
        <div className="min-h-screen bg-[#060D17] text-white">

            <Jobdetailnav />

            <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">

                <div className="mb-7">

                    <p className="text-xs font-medium uppercase tracking-wider text-[#8B6CFF]">
                        Job Application
                    </p>

                    <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
                        Apply for this position
                    </h1>

                    <p className="mt-2 text-sm text-white/40">
                        Upload your resume to submit your application.
                    </p>

                </div>


                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-white/10 bg-[#0B111D] p-6 sm:p-8"
                >

                    {/* Resume */}
                    <div>

                        <label className="mb-2 block text-sm font-medium">
                            Resume
                        </label>

                        <div className="rounded-xl border border-dashed border-white/15 bg-[#060D17] p-8">

                            <div className="flex flex-col items-center text-center">

                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#492DBB]/15">
                                    <i className="ri-file-upload-line text-2xl text-[#8B6CFF]"></i>
                                </div>

                                <p className="mt-4 text-sm font-medium">
                                    Upload your resume
                                </p>

                                <p className="mt-1 text-xs text-white/35">
                                    PDF, DOC,DOCX • Max 5MB
                                </p>

                                <label
                                    htmlFor="resume"
                                    className="mt-5 cursor-pointer rounded-lg border border-white/10 px-5 py-2.5 text-xs font-medium text-white/60 hover:bg-white/5 hover:text-white"
                                >
                                    <i className="ri-upload-2-line mr-2"></i>
                                    Choose File
                                </label>

                                <input
                                    id="resume"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => {
                                        setResume(e.target.files[0])
                                    }}
                                    className="hidden"
                                />

                                {resume && (
                                    <div className="mt-4 flex items-center gap-2 rounded-lg border border-[#492DBB]/30 bg-[#492DBB]/10 px-4 py-2">

                                        <i className="ri-file-text-line text-[#8B6CFF]"></i>

                                        <p className="max-w-55 truncate text-xs text-white/60">
                                            {resume.name}
                                        </p>

                                    </div>
                                )}

                            </div>

                        </div>

                    </div>


                    {/* Error */}
                    {error && (
                        <div className="mt-5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">

                            <p className="text-sm text-red-400">
                                <i className="ri-error-warning-line mr-2"></i>
                                {error}
                            </p>

                        </div>
                    )}


                    {/* Buttons */}
                    <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">

                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="rounded-lg border border-white/10 px-6 py-3 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-lg bg-[#492DBB] px-7 py-3 text-sm font-semibold hover:bg-[#5A3BD0] disabled:cursor-not-allowed disabled:opacity-50"
                        >

                            {loading ? (
                                'Submitting...'
                            ) : (
                                <>
                                    <i className="ri-send-plane-line mr-2"></i>
                                    Submit Application
                                </>
                            )}

                        </button>

                    </div>

                </form>

            </main>

        </div>
    )
}

export default Applyform