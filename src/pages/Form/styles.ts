import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  Wrapper: {
    width: '100%',
    height: '100vh',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
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
      padding: '1rem 2.5rem 2rem 2.5rem'
    }
  },
  NextButton: {
    marginLeft: 'auto'
  }
}));
