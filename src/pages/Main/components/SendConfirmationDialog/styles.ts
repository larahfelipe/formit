import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  Wrapper: {
    width: '80%',
    height: '12rem',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: 'white',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',

    '@keyframes popup': {
      '0%': {
        opacity: 0,
        transform: 'scale(0.85)'
      },
      '100%': {
        opacity: 1,
        transform: 'scale(1)'
      }
    },

    animation: 'popup 0.3s ease-in-out'
  },
  Header: {
    width: '100%',
    height: '3rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: theme.colors.green[0],
    borderBottom: `1px solid ${theme.colors.green[2]}`,

    '> h3': {
      color: theme.colors.green[9]
    }
  },
  Body: {
    width: '100%',

    marginTop: '1rem',
    padding: '0 1.5rem',

    textAlign: 'center'
  },
  ButtonsWrapper: {
    width: '100%',

    display: 'flex',
    justifyContent: 'space-between',

    marginTop: '0.5rem',
    padding: '0.5rem 1rem'
  }
}));
