import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      // handle 401 error here, e.g., log out the user
      await handleLogout();
    }
    return Promise.reject(error);
  },
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const response = await api.get(queryKey[0]);
        return response.data;
      },
      onError: (error) => {
        // handle query-specific errors here, if needed
        console.error('Query error:', error);
      },
    },
  },
});

async function handleLogout() {
  // Perform any necessary cleanup/logic before logging out
  console.log('Logging out...');
  // Your logout logic here
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your app code here */}
    </QueryClientProvider>
  );
}
