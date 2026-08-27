import React, {
    createContext,
    useEffect,
    useState
} from "react";

import api, {
    refreshApi,
    setAccessToken
} from "../service/axios";

export const usercont = createContext();

const Usercontext = ({ children }) => {

    const [loading, setloading] = useState(true);
    const [acesstoken, setacesstoken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {

        const initializeAuth = async () => {

            console.log("AUTH INITIALIZING...");

            try {

                // Refresh cookie automatically send hogi
                const response = await refreshApi.post(
                    "/auth/token"
                );

                const token =
                    response.data.acesstoken;

                console.log("NEW ACCESS TOKEN:", token);

                // memory mein token
                setAccessToken(token);
                setacesstoken(token);

                // Profile
                const profileResponse =
                    await api.get("/auth/profile");

                console.log(
                    "PROFILE:",
                    profileResponse.data
                );

                setUser(
                    profileResponse.data.user
                );

            } catch (error) {

                console.log(
                    "AUTH ERROR STATUS:",
                    error.response?.status
                );

                console.log(
                    "AUTH ERROR DATA:",
                    error.response?.data
                );

                setAccessToken(null);
                setacesstoken(null);
                setUser(null);

            } finally {

                setloading(false);

            }

        };

        initializeAuth();

    }, []);

    return (
        <usercont.Provider
            value={{
                acesstoken,
                setacesstoken,
                user,
                setUser,
                loading
            }}
        >
            {children}
        </usercont.Provider>
    );
};

export default Usercontext;