import axios from "axios";
import Cookies from "js-cookie";
import { signOut } from "next-auth/react"


const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {},
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add an "Authorization" header if the token is available
    const token = Cookies.get("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    if (config.url.includes("/media")) {
      config.headers["Content-Type"] = "multipart/form-data";
    }else{
      config.headers["Content-Type"] = "application/json";
      
    }
    
    return config;
  },
  (error) => {
    localStorage.removeItem('signupCurrentStep');
    Cookies.remove('token');
    Cookies.remove('id');
    signOut();
    return Promise.reject(error);
  }
);

export default axiosInstance;
