import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  Wrapper: {
    width: '100%',
    height: '2px',

    backgroundColor: 'rgba(29, 28, 229, 0.05)'
  },
  Progress: {
    height: '2px',

    position: 'relative',

    backgroundColor: '#1D1CE5',

    transition: 'width 0.9s ease'
  }
}));
