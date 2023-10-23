import { useState } from "react";
import Cookies from 'js-cookie';
import {  useSession } from 'next-auth/react';
import Cookie from "js-cookie";

const useAxios = () => {
  const [resdata, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const {  status, data: session } = useSession();
  const token = Cookie.get("token");

  const baseUrl = process.env.BASE_URL;
  const headers = {
    "Content-Type": "application/json",
  };

  // Add Authorization header if session.accessToken exists
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const fetchData = async (url, method = "GET", requestData = null) => {
    setLoading(true);
    fetch(`${baseUrl}${url}`, {
      method,
      headers,
      body: JSON.stringify(requestData),
    })
      .then((response) => response.text())
      .then((data) => {
        const jsonData = JSON.parse(data);
        if(jsonData?.data?.id && jsonData?.accessToken){
          Cookies.set('id', jsonData.data.id, { expires: 7 });
          Cookies.set('token', jsonData.referhToken, { expires: 7 });
        }
        setData(jsonData);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
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
