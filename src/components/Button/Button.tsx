import { Button as MButton } from '@mantine/core';

import type { ButtonProps } from './types';

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <MButton color="green" {...props}>
      {children}
    </MButton>
  );
};
