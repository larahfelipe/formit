import { Global, MantineProvider } from '@mantine/core';

import { theme as customTheme } from '@/styles/theme';

import type { AppProviderProps } from './types';

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <MantineProvider
      theme={{
        fontFamily: customTheme.fonts.family
      }}
    >
      <Global
        styles={(theme) => ({
          '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
          },
          'body, input, button, textarea': {
            border: 'none',
            outline: 'inherit',
            fontSize: theme.fontSizes.sm,
            fontFamily: customTheme.fonts.family,
            color: '#04042E'
          },
          'button, a': {
            cursor: 'pointer',
            color: 'inherit',
            textDecoration: 'none'
          }
        })}
      />
      {children}
    </MantineProvider>
  );
};
