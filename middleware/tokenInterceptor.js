// tokenInterceptor.js
import axiosInstance from './axiosInstance';

const tokenInterceptor = () => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401 && error.response.data.message === 'Token expired') {
        // Token is expired. Perform a token refresh here.

        // Make a request to your server to refresh the token
        const newToken = await refreshToken(); // Implement your refreshToken function

        if (newToken) {
          // If the token refresh is successful, update the Axios instance with the new token
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;

          // Retry the original request
          return axiosInstance(error.config);
        }
      }
      return Promise.reject(error);
    }
  );
};

export default tokenInterceptor;
