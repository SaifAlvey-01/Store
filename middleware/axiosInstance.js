import axios from "axios";
import Cookies from "js-cookie";
import { signOut } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {},
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Check if the request body is FormData (indicating file upload)
    if (config.data instanceof FormData) {
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
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get("referhToken");

        // Make a request to refresh the access token
        const response = await axios.put("/auth/refresh-token", {
          refresh_token: refreshToken,
        });

        // If refresh is successful, update the access token and retry the original request
        const newAccessToken = response.data.access_token;
        Cookies.set("token", newAccessToken);
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return axios(originalRequest);
      } catch (refreshError) {
        // If refresh token request fails, log out the user
        handleLogout();
        return Promise.reject(refreshError);
      }
    }

    // If the error is not a 401 or refresh fails, log out the user
    handleLogout();
    return Promise.reject(error);
  }
);

const handleLogout = async () => {
  // Perform additional cleanup/logic before signing out
  localStorage.removeItem("signupCurrentStep");
  Cookies.remove("token");
  Cookies.remove("refreshToken");
  Cookies.remove("id");

  // Sign out the user
  await signOut();
};

export default axiosInstance;
