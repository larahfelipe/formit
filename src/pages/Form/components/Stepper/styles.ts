import { createStyles } from '@mantine/core';

export const StepperStyles = {
  steps: {
    width: '60%',

    display: 'flex',
    justifyContent: 'space-between',

    margin: '1.25rem 0',
    marginLeft: '20rem',

    '@media (max-width: 1205px)': {
      width: '75%',
      marginLeft: '10rem'
    },
    '@media (max-width: 810px)': {
      width: '100%',

      marginLeft: 'unset',
      padding: '0 1.5rem'
    },
    '@media (max-width: 610px)': {
      width: 'fit-content',
      height: '10rem',

      padding: 'unset',
      marginLeft: '2.25rem'
    }
  },
  step: {
    color: '#04042E'
  },
  stepProgress: {
    color: '#1D1CE5'
  },
  separator: {
    display: 'none'
  }
};

export const useStyles = createStyles(() => ({
  Header: {
    display: 'flex',
    flexDirection: 'column',

    '> p': {
      width: 'fit-content',

      marginLeft: '20rem',
      marginBottom: '2.5rem',

      fontSize: '36px',
      fontWeight: 500,

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

      animation: 'slidein 0.5s forwards',

      '@media (max-width: 1210px)': {
        marginLeft: '10rem'
      },
      '@media (max-width: 610px)': {
        marginLeft: '2.5rem'
      }
    }
  },
  Body: {
    padding: '0 20rem',

    '@media (max-width: 1210px)': {
      padding: '0 10rem'
    },
    '@media (max-width: 765px)': {
      padding: '0 5rem'
    },
    '@media (max-width: 610px)': {
      padding: '0 2.5rem'
    }
  }
}));
