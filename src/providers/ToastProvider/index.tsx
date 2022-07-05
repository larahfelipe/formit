import { useMantineTheme } from '@mantine/core';
import { Toaster } from 'react-hot-toast';

export const ToastProvider = () => {
  const { fontSizes } = useMantineTheme();

  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 5000,
        style: {
          fontSize: fontSizes.md
        }
      }}
    />
  );
};
