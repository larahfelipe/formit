import type { MasksName } from '@nafuzi/brazilian-masks';
import type { Control, FieldValues, Path, PathValue } from 'react-hook-form';

type InputType = 'text' | 'select' | 'password' | 'date' | 'radio' | 'checkbox';

type SelectData = {
  label: string;
  value: string;
};

export interface InputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  type?: InputType;
  data?: SelectData[];
  verboseSelectionValue?: boolean;
  placeholder?: string;
  defaultValue?: PathValue<T, Path<T>>;
  mask?: MasksName;
  min?: string;
  max?: string;
  disabled?: boolean;
  loading?: boolean;
}

export type CallbackFunction = (value: string) => void;
