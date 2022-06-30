import type { MasksName } from '@nafuzi/brazilian-masks';
import type { Control, Path, PathValue } from 'react-hook-form';

type InputType = 'text' | 'select' | 'password' | 'date' | 'radio' | 'checkbox';

type SelectData = {
  label: string;
  value: string;
};

export interface InputProps<T> {
  control: Control<T>;
  name: Path<T>;
  type?: InputType;
  data?: SelectData[];
  placeholder?: string;
  defaultValue?: PathValue<T, Path<T>>;
  mask?: MasksName;
  min?: string;
  max?: string;
  disabled?: boolean;
  error: any;
}

export type CallbackFunction = (value: string) => void;
