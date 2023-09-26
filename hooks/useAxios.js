import { useState } from "react";

const useAxios = () => {
  const [resdata, setData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const baseUrl = process.env.BASE_URL;
  console.log(baseUrl, "<----baseUrl")

  const fetchData = async (url, method = "GET", requestData = null) => {
    setLoading(true);

    fetch(`${baseUrl}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("--->", data);
        const jsonData = JSON.parse(data);
        console.log(jsonData, "<-----jsonData");
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
