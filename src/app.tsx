import { AppProvider, ToastProvider } from '@/providers';
import { AppRoutes } from '@/routes';

export const App = () => {
  return (
    <AppProvider>
      <ToastProvider />
      <AppRoutes />
    </AppProvider>
  );
};
