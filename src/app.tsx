import { Main } from '@/pages';
import { AppProvider, ToastProvider } from '@/providers';

export const App = () => {
  return (
    <AppProvider>
      <ToastProvider />
      <Main />
    </AppProvider>
  );
};
