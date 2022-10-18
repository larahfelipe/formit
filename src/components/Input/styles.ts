import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  Wrapper: {
    display: 'flex',
    alignItems: 'center',

    position: 'relative'
  },
  Input: {
    width: '100%',

    padding: '0.8rem 0.9rem',

    fontSize: theme.fontSizes.lg,
    backgroundColor: '#f1f3f5',

    border: '1px solid #f1f3f5',
    borderRadius: theme.radius.sm,

    transition: 'all 0.2s ease-in-out',

    '&:focus': {
      border: `1px solid ${theme.colors.blue[7]}`,
      backgroundColor: 'rgba(29, 28, 229, 0.05)'
    }
  },
  Loader: {
    position: 'absolute',
    right: '1rem',

    backgroundColor: theme.colors.gray[0]
  },
  ErrorText: {
    marginTop: '5px',
    marginBottom: '-0.5rem',

    color: theme.colors.red[7],

    animation: 'slidein 0.3s forwards'
  }
}));
