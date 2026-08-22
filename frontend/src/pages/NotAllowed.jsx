import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotAllowed = () => {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#060D17] text-white flex items-center justify-center px-4">

            <div className="w-full max-w-md text-center">

                {/* Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#492DBB]/15 border border-[#492DBB]/30">
                    <i className="ri-lock-2-line text-4xl text-[#8B6CFF]"></i>
                </div>


                {/* Error */}
                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#8B6CFF]">
                    403 Error
                </p>


                {/* Heading */}
                <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                    Access Denied
                </h1>


                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-white/45">
                    You don't have permission to access this page.
                    Please login with an authorized account to continue.
                </p>


                {/* Buttons */}
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

                    <button
                        onClick={() => navigate(-1)}
                        className="rounded-lg border border-white/10 px-6 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
                    >
                        <i className="ri-arrow-left-line mr-2"></i>
                        Go Back
                    </button>


                    <Link
                        to="/"
                        className="rounded-lg bg-[#492DBB] px-6 py-3 text-sm font-semibold transition hover:bg-[#5A3BD0]"
                    >
                        <i className="ri-home-5-line mr-2"></i>
                        Go Home
                    </Link>

                </div>


                {/* Small message */}
                <p className="mt-8 text-xs text-white/25">
                    If you think this is a mistake, please login again.
                </p>

            </div>

        </div>
    );
};

export default NotAllowed;