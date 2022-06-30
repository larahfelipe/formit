import type { MasksName } from '@nafuzi/brazilian-masks';
import type { Control, Path, PathValue } from 'react-hook-form';

type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'date'
  | 'radio'
  | 'checkbox'
  | 'file';

export interface InputProps<TData> {
  control: Control<TData>;
  name: Path<TData>;
  type?: InputType;
  min?: string;
  max?: string;
  placeholder?: string;
  defaultValue?: PathValue<TData, Path<TData>>;
  mask?: MasksName;
  disabled?: boolean;
  error: any;
}

export type CallbackFunction = (value: string) => void;
