import axios from "axios";

export const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
});

instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
        let errorMessage = 'An unexpected error occurred. Please try again.';

        if (error.response) {
            if (error.response.status >= 400 && error.response.status < 500) {
                errorMessage = error.response.data.message || 'Invalid request.';
            } else if (error.response.status >= 500) {
                errorMessage = 'Server error: Please try again later.';
            }
        } else if (error.message === 'Network Error') {
            errorMessage = 'Network error: Please check your internet connection.';
        } else if (error.code === 'ECONNABORTED') {
            errorMessage = 'Request timed out. Please try again later.';
        }

        return Promise.reject(new Error(errorMessage));
    }
);
