import { createStyles } from '@mantine/core';

export const useStyles = createStyles({
  Wrapper: {
    width: '100%'
  },
  InputWrapper: {
    marginTop: '1.5rem'
  },
  InlineFieldsWrapper: {
    display: 'flex',
    gap: '1rem',

    '> :first-of-type': {
      width: '100%'
    }
  }
});
