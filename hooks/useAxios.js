import { useState } from "react";
import Cookies from "js-cookie";
import { useSession } from "next-auth/react";
import Cookie from "js-cookie";
import axiosInstance from "../middleware/axiosInstance";

const useAxios = () => {
  const [resdata, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { status, data: session } = useSession();

  const baseUrl = process.env.BASE_URL;

  const fetchData = async (url, method = "GET", requestData = null) => {
    setLoading(true);
    try {
      const response = await axiosInstance({
        method,
        url: `${baseUrl}${url}`,
        data: requestData,
      });

      const jsonData = response.data;
      if (jsonData?.data?.id && jsonData?.accessToken) {
        Cookies.set("id", jsonData.data.id, { expires: 7 });
        Cookies.set("token", jsonData.accessToken, { expires: 7 });
        Cookies.set("referhToken", jsonData.referhToken, { expires: 7 });
      }

      setData(jsonData);
    } catch (err) {
      console.error("Axios error:", err);
      // setError(err);
      if (err.response && err.response.status === 401) {
        // Access token expired, try refreshing it
        try {
          const response = await axiosInstance({
            method: "POST",
            url: "/refresh-token-endpoint", // Replace with your actual refresh token endpoint
            data: {
              refreshToken: Cookie.get("refreshToken"), // Send the stored refresh token
            },
          });

          if (response.data.accessToken) {
            // Refresh successful, store the new access token
            Cookies.set("token", response.data.accessToken, { expires: 7 });
            // Retry the original request
            const retryResponse = await axiosInstance({
              method,
              url: `${baseUrl}${url}`,
              data: requestData,
            });

            const retryData = retryResponse.data;
            setData(retryData);
          } else {
            setError("Token refresh failed");
          }
        } catch (refreshError) {
          setError("Token refresh failed");
        }
      } else {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  const getData = async (url) => {
    await fetchData(url, "GET");
  };

  const postData = async (url, requestData) => {
    await fetchData(url, "POST", requestData);
  };

  const putData = async (url, requestData) => {
    await fetchData(url, "PUT", requestData);
  };

  return { resdata, error, loading, getData, postData, putData };
};

export default useAxios;
