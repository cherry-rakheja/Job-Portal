import React, {
    createContext,
    useEffect,
    useState
} from "react";

import api, {
    setAccessToken
} from "../service/axios";

export const usercont = createContext();

const Usercontext = ({ children }) => {

    const [loading, setloading] = useState(true);
    const [acesstoken, setacesstoken] = useState(null);
    const [user, setUser] = useState(null);


    // App load
    useEffect(() => {

        const initializeAuth = async () => {

            try {

                // Refresh token se new access token
                const response = await api.post(
                    "/auth/token",
                    {},
                    {
                        withCredentials: true
                    }
                );

                const token = response.data.acesstoken;

                console.log("REFRESH TOKEN:", token);

                // IMPORTANT
                setAccessToken(token);
                setacesstoken(token);


                // Token set hone ke baad profile
                const profileResponse = await api.get(
                    "/auth/profile",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                console.log(
                    "PROFILE:",
                    profileResponse.data
                );

                setUser(
                    profileResponse.data.user
                );

            } catch (error) {

                console.log(
                    "AUTH ERROR:",
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