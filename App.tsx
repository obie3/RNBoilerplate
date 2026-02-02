import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { setupInterceptors } from './src/core/api/interceptors';
import { initFirebase } from './src/core/config/firebase';
import { RootNavigator } from './src/app/navigation/RootNavigator';
import { AuthProvider } from './src/features/auth/context/AuthContext';

const client = new QueryClient();

export default function App() {
  useEffect(() => {
    setupInterceptors();
    initFirebase();
  }, []);

  return (
    <AuthProvider>
      <QueryClientProvider client={client}>
        <RootNavigator />
      </QueryClientProvider>
    </AuthProvider>
  );
}
