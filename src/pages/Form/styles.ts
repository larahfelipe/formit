import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  Wrapper: {
    width: '100vw',
    height: '100vh',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  CardWrapper: {
    width: '45%',
    height: '90%',

    maxWidth: '60rem',
    maxHeight: '55rem',

    '@media (max-width: 1525px)': {
      width: '60%'
    },
    '@media (max-width: 1145px)': {
      width: '80%'
    },
    '@media (max-width: 860px)': {
      width: '90%'
    },
    '@media (max-width: 585px)': {
      width: '100%',
      height: '100%'
    }
  },
  Card: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

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

    '@media (max-width: 760px)': {
      overflowY: 'auto'
    },
    '@media (max-height: 860px)': {
      overflowY: 'auto'
    }
  },
  CardHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: theme.spacing.lg
  },
  CardFooter: {
    padding: '0 2rem',
    marginBottom: '1rem',

    '@media (max-width: 760px)': {
      marginTop: '3rem'
    }
  },
  ButtonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',

    '@media (max-height: 860px)': {
      marginTop: '4rem'
    }
  }
}));
