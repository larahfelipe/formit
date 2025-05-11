import { ChangeEvent, memo } from 'react';

import * as M from '@mantine/core';
import masks from '@nafuzi/brazilian-masks';
import { Controller, FieldValues } from 'react-hook-form';

import { useStyles } from './styles';
import type { CallbackFunction, InputProps } from './types';

const InputComponent = <T extends FieldValues>({
  control,
  name,
  type = 'text',
  data,
  verboseSelectionValue,
  placeholder,
  defaultValue,
  mask,
  disabled,
  loading,
  ...props
}: InputProps<T>) => {
  const { classes } = useStyles();

  const handleChange = (cb: CallbackFunction) => {
    return (event: ChangeEvent) => {
      const value = (event.target as HTMLInputElement).value;
      mask ? cb(masks[mask](value)) : cb(value);
    };
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({
        field: { value = '', onChange, onBlur },
        formState: { errors }
      }) => (
        <>
          {type === 'select' && data?.length && (
            <datalist id={name}>
              {data.map((item) => (
                <option
                  key={item.value}
                  value={
                    verboseSelectionValue
                      ? `${item.value} - ${item.label}`
                      : item.value
                  }
                >
                  {item.label}
                </option>
              ))}
            </datalist>
          )}

          <div className={classes.Wrapper}>
            <input
              className={classes.Input}
              type={type}
              list={type === 'select' ? name : undefined}
              placeholder={placeholder}
              value={value}
              onBlur={handleChange(onBlur)}
              onChange={handleChange(onChange)}
              disabled={disabled}
              style={{
                borderColor: errors[name]?.message && 'red',
                backgroundColor: errors[name]?.message && '#fff5f5',
                opacity: disabled ? 0.5 : 1,
                cursor: disabled ? 'not-allowed' : 'inherit'
              }}
              {...props}
            />
            {loading && (
              <M.Loader className={classes.Loader} size="sm" color="gray" />
            )}
          </div>

          {!!errors[name]?.message && (
            <M.Text size="sm" className={classes.ErrorText}>
              {errors[name]?.message as string}
            </M.Text>
          )}
        </>
      )}
    />
  );
};

export const Input = memo(InputComponent) as typeof InputComponent;
