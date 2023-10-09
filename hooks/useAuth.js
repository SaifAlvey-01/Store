import { useEffect } from "react";
import { useRouter } from "next/router";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, []);
};
export default useAuth;
