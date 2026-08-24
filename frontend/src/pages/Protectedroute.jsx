import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { usercont } from '../context/Usercontext'

const Protectedroute = ({ allowedRole }) => {

    const { user, loading } = useContext(usercont);
    console.log("PROTECTED ROUTE:", {
        user,
        role: user?.role,
        allowedRole,
        loading
    });

  
    if (loading) {
        return (
            <div className="min-h-screen bg-[#060D17] text-white flex items-center justify-center">
                <p className="text-white/60">
                    Checking authentication...
                </p>
            </div>
        );
    }


    if (!user) {
        return <Navigate to="/login" replace />;
    }


    if (allowedRole && user.role !== allowedRole) {
        return <Navigate to="/not-allowed" replace />;
    }

    return <Outlet />;
};

export default Protectedroute;