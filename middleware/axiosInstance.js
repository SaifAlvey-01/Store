import axios from "axios";
import Cookies from "js-cookie";
import { signOut } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {},
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // Add an "Authorization" header if the token is available
    const token = Cookies.get("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    if (config.url.includes("/media")) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  }
);

// Response interceptor for token refresh
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        handleLogout();
      }
      return Promise.reject(error);
    }
  );


const handleLogout = async () => {
  // You can perform additional cleanup/logic before signing out
  localStorage.removeItem('signupCurrentStep');
  Cookies.remove('token');
  Cookies.remove('id');
  
  // Sign out the user
  await signOut();
};

export default axiosInstance;
