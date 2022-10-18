import { createStyles } from '@mantine/core';

export const useStyles = createStyles({
  Wrapper: {
    width: '100%'
  },
  InputWrapper: {
    marginTop: '2rem'
  },
  FileInputLabelWrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  FileInputFieldWrapper: {
    display: 'flex',
    justifyContent: 'space-between',

    '& > input': {
      alignSelf: 'center'
    }
  },
  RequiredFilesList: {
    marginTop: '8px',

    '> li': {
      fontWeight: 'bold'
    }
  }
});
