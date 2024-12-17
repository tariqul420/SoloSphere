import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response
        }, error => {
            console.log(error);
            if (error.status === 401 || error.status === 403) {
                logOut()
                    .then(() => {
                        console.error('logout the user');
                        navigate('/login')
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }

            return Promise.reject(error)
        })
    }, []);

    return axiosInstance
};

export default useAxiosSecure;