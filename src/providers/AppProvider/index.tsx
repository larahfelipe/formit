import { MantineProvider, Global } from '@mantine/core';

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
          body: {
            background: theme.colors.gray[1]
          },
          'body, input, button, textarea': {
            border: 'none',
            outline: 'inherit',
            fontSize: theme.fontSizes.sm,
            fontFamily: customTheme.fonts.family
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
