import type { ReactNode } from 'react';

import type { ButtonProps as MButtonProps } from '@mantine/core';

export type ButtonProps = MButtonProps<HTMLButtonElement> & {
  children: ReactNode;
};
