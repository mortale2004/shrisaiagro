'use client';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { memo, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';

const AppSelectField: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  options = [],
  valueSelectionKey = '_id',
  selectionKey = 'label',
  size = 'small',
  sx,
  setValue,
  handleChange,
  fullWidth = true,
  generateSingleOptions = (options: any) => {
    return options?.map((option: any) => {
      return (
        <MenuItem
          key={option[valueSelectionKey]}
          value={option[valueSelectionKey]}
        >
          {option[selectionKey]}
        </MenuItem>
      );
    });
  },
}) => {
  useEffect(() => {
    if (options?.length == 1 && options?.[0]) {
      setValue?.(name, options?.[0][valueSelectionKey]);
    }
  }, [options]);
  return (
    <FormControl fullWidth={fullWidth} size={size} sx={sx}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select
            onChange={(...params) => {
              onChange(...params);
              handleChange?.(...params);
            }}
            value={value}
          >
            {generateSingleOptions(options)}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};

export default memo(AppSelectField);
