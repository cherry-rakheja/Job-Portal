import axios from "axios";

const api = axios.create({
    baseURL: 'https://job-portal-a10o.onrender.com/api',
    withCredentials: true,
});


// Current access token
let accessToken = null;


// Context se token yahan set hoga
export const setAccessToken = (token) => {
    accessToken = token;
};


// Normal API requests ke liye token automatically add hoga
api.interceptors.request.use(
    (config) => {

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    }
);


// Refresh ke liye ALAG axios instance
const refreshApi = axios.create({
    baseURL: 'https://job-portal-a10o.onrender.com',
    withCredentials: true,
});


api.interceptors.response.use(

    (response) => {
        return response;
    },

    async (error) => {

        const originalRequest = error.config;

        // Agar 401 nahi hai
        // ya request already retry ho chuki hai
        if (
            error.response?.status !== 401 ||
            originalRequest._retry
        ) {
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {

            const response = await refreshApi.post(
                "/auth/token"
            );

            const newAccessToken =
                response.data.acesstoken;

            // New access token memory mein save
            setAccessToken(newAccessToken);

            // Original request mein new token lagao
            originalRequest.headers.Authorization =
                `Bearer ${newAccessToken}`;

            // Original request dobara bhejo
            return api(originalRequest);

        } catch (refreshError) {

            setAccessToken(null);

            return Promise.reject(refreshError);
        }
    }
);


export default api;