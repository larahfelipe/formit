import { Main } from '@/pages';
import { AppProvider } from '@/providers';

export const App = () => {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
};
