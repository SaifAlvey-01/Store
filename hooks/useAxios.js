import { useState } from 'react';

const useAxios = () => {
  const [resdata, setData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const baseUrl = "http://localhost:5500";
                                      
  const fetchData = async (url, method = 'GET', requestData = null) => {
    setLoading(true);

    // try {
    //   const response = await fetch(`${baseUrl}${url}`, {
    //     method ,
    //     headers,
    //     body: JSON.stringify(requestData), 
    //   });

      
    //   if (!response.ok) {
    //     throw new Error(`HTTP Error! Status: ${response.status}`);
    //   }

    //   const data = response
    //   console.log(data, "<---data")
    //   setData(data);
    // } catch (err) {
    //   setError(err);
    // } finally {
    //   setLoading(false);
    // }



    fetch(`${baseUrl}${url}`, {
      method, 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then(response => response.text())
      .then(data => {
      console.log("--->",data); // Log the response data
      // Parse the data as JSON
      const jsonData = JSON.parse(data);
      console.log(jsonData, "<-----jsonData")
      setData(jsonData);
      })
      .catch(err => {
      console.error('Fetch error:', err);
      setError(err);
      }).finally(() => {
        setLoading(false);
      });
    
  };

  const getData = async (url) => {
    await fetchData(url, 'GET');
  };

  const postData = async (url, requestData) => {
    await fetchData(url, 'POST', requestData);
  };
  const putData = async (url, requestData) => {
    await fetchData(url, 'PUT', requestData);
  };

  return { resdata, error, loading, getData, postData, putData };
};

export default useAxios;
