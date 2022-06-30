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
    width: '40%',
    height: '90%',

    '@media (max-width: 1170px)': {
      width: '60%'
    },
    '@media (max-width: 780px)': {
      width: '80%'
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
    justifyContent: 'space-between'
  },
  CardHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: theme.spacing.lg
  },
  StepperWrapper: {
    width: '100%',
    padding: '0 2rem'
  },
  CardContent: {
    marginTop: '3rem'
  },
  CardFooter: {
    padding: '0 2rem',
    marginBottom: '1rem'
  },
  ButtonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'flex-end'
  }
}));
