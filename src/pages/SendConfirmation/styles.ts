import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  Wrapper: {
    width: '100vw',
    height: '100vh',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  CardWrapper: {
    width: '35%',
    height: '12rem',

    maxWidth: '40rem',
    maxHeight: '15rem',

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

    animation: 'popup 0.3s ease-in-out',

    '@media (max-width: 1310px)': {
      width: '50%'
    },
    '@media (max-width: 980px)': {
      width: '70%'
    },
    '@media (max-width: 700px)': {
      width: '90%'
    },
    '@media (max-width: 430px)': {
      width: '95%',
      height: '14rem'
    }
  },
  Header: {
    width: '100%',
    height: '3rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderBottom: '1px solid #e0e0e0',
    backgroundColor: '#f5f5f5',

    '> h3': {
      color: '#04042E'
    }
  },
  Body: {
    width: '100%',

    marginTop: '1rem',
    padding: '0 1.5rem',

    textAlign: 'center'
  },
  Footer: {
    width: '100%',

    display: 'flex',
    justifyContent: 'space-between',

    marginTop: '0.5rem',
    padding: '0.5rem 1rem'
  }
}));
