import { useState } from 'react';

const useAxios = () => {
  const [resdata, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseUrl = "http://localhost:5500";

  const headers = {
    'Content-Type': 'application/json',
    'credentials': 'include',
  };

  const fetchData = async (url, method = 'GET', requestData = null) => {
    setLoading(true);

    try {
      const response = await fetch(`${baseUrl}${url}`, {
        method,
        headers,
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const getData = async (url) => {
    await fetchData(url, 'GET');
  };

  const postData = async (url, requestData) => {
    await fetchData(url, 'POST', requestData);
  };

  return { resdata, error, loading, getData, postData };
};

export default useAxios;
