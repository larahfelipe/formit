import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  SelectInput: {
    width: '100%',

    padding: '0.6rem 0.8rem',

    fontSize: theme.fontSizes.md,
    background: theme.colors.gray[0],
    border: `1px solid ${theme.colors.gray[4]}`,

    transition: 'border 0.2s ease-in-out',
    '&:focus': {
      border: `1px solid ${theme.colors.green[7]}`
    }
  },
  ErrorText: {
    marginTop: '5px',

    color: theme.colors.red[7]
  }
}));
