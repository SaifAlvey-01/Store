import { useState } from "react";
import Cookies from 'js-cookie';
import {  useSession } from 'next-auth/react';


const useAxios = () => {
  const [resdata, setData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const {  status, data: session } = useSession();

  const baseUrl = process.env.BASE_URL;

  const fetchData = async (url, method = "GET", requestData = null) => {
    setLoading(true);

    fetch(`${baseUrl}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        'Authorization': session.accessToken
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.text())
      .then((data) => {
        const jsonData = JSON.parse(data);
        if(jsonData?.data?.id){
          Cookies.set('id', jsonData.data.id, { expires: 7 });
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
