import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  Wrapper: {
    width: '100vw',
    height: '100vh',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '@media (max-width: 610px)': {
      overflowX: 'hidden'
    }
  },
  ButtonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',

    padding: '0 20rem',

    margin: '2rem 0',

    '@media (max-width: 1210px)': {
      padding: '0 10rem'
    },
    '@media (max-width: 765px)': {
      padding: '0 5rem'
    },
    '@media (max-width: 610px)': {
      padding: '0 2.5rem',
      paddingTop: '3rem'
    }
  },
  NextButton: {
    marginLeft: 'auto'
  }
}));
