import { useEffect } from 'react';
import { useRouter } from 'next/router';

// This function should check if the user is authenticated
const isAuthenticated = () => {
  // Implement your authentication logic here
  // For example, check for the presence of a valid token in localStorage
  const token = localStorage.getItem('token');
  return !!token;
};

// Custom hook for authentication
const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated()) {
      router.push('/login'); // Replace '/login' with your login route
    }
  }, []);
};

export default useAuth;
