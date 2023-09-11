// hooks/useAxios.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = () => {
  const [resdata, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseUrl = "http://localhost:5500"

  const headers = {
    headers: {
      'Content-Type': 'application/json',
  },
  }



  const fetchData = async (url, method = 'get', requestData = null) => {
    setLoading(true);

    try {
      const response = await axios({
        method,
        url:`${baseUrl}${url}`,
        data: requestData,
        headers
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const getData = async (url) => {
    await fetchData(url, 'get');
  };

  const postData = async (url, requestData) => {
    await fetchData(url, 'post', requestData);
  };

  return { resdata, error, loading, getData, postData };
};

export default useAxios;
