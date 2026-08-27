import axios from "axios";

const api = axios.create({
    baseURL: "https://job-portal-a10o.onrender.com/api",
    withCredentials: true
});

let accessToken = null;

export const setAccessToken = (token) => {
    accessToken = token;
};

api.interceptors.request.use((config) => {

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

export const refreshApi = axios.create({
    baseURL: "https://job-portal-a10o.onrender.com/api",
    withCredentials: true
});

api.interceptors.response.use(
    (response) => response,

    async (error) => {

        const originalRequest = error.config;

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

            setAccessToken(newAccessToken);

            originalRequest.headers.Authorization =
                `Bearer ${newAccessToken}`;

            return api(originalRequest);

        } catch (refreshError) {

            setAccessToken(null);

            return Promise.reject(refreshError);
        }
    }
);

export default api;