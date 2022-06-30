import type { Control } from 'react-hook-form';

export type SelectInputProps = {
  control: Control;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  optionsData: any;
  disabled?: boolean;
  error: any;
};
