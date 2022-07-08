import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  Input: {
    width: '100%',

    padding: '0.6rem 0.8rem',

    fontSize: theme.fontSizes.md,
    background: theme.colors.gray[0],
    border: `1px solid ${theme.colors.gray[4]}`,
    borderRadius: theme.radius.sm,

    transition: 'border 0.2s ease-in-out',
    '&:focus': {
      border: `1px solid ${theme.colors.green[7]}`,
      backgroundColor: '#f7fcf5'
    }
  },
  ErrorText: {
    marginTop: '5px',

    color: theme.colors.red[7]
  }
}));
