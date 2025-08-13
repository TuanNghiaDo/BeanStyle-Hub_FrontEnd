import axios from 'axios';
import Cookies from 'js-cookie';
const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.request.use(
    async (config) => {
        const token = Cookies.get('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err);
    }
);

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = Cookies.get('refreshToken');
            if (refreshToken) {
                try {
                    const response = await axios.post('/refresh-token', { token: refreshToken });
                    const token = response.data.accessToken;
                    Cookies.set('token', token);
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return axiosClient(originalRequest);
                } catch (err) {
                    Cookies.remove('token');
                    Cookies.remove('refreshToken');
                    return Promise.reject(err);
                }
            }
        }
    }
);
export default axiosClient;