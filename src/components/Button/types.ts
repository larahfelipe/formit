import type { ButtonProps as MButtonProps } from '@mantine/core';
import type { ComponentChildren } from 'preact';

export type ButtonProps = MButtonProps<HTMLButtonElement> & {
  children: ComponentChildren;
};
