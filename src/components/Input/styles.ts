import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  Wrapper: {
    display: 'flex',
    alignItems: 'center'
  },
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
  Loader: {
    position: 'absolute',
    right: '2.8rem',

    backgroundColor: theme.colors.gray[0]
  },
  ErrorText: {
    marginTop: '5px',
    marginBottom: '-0.5rem',

    color: theme.colors.red[7],

    WebkitAnimation: 'slidein 0.5s forwards',
    WebkitAnimationDelay: '2s',

    '@keyframes slidein': {
      '0%': {
        opacity: 0,
        transform: 'translateY(-100%)'
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0%)'
      }
    },

    animation: 'slidein 0.3s forwards'
  }
}));
