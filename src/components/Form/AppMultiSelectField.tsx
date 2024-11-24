'use client';
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';
import { memo, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';

const AppMultiSelectField: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  options = [],
  valueSelectionKey = '_id',
  selectionKey = 'label',
  size = 'small',
  sx,
  setValue,
  generateSingleOptions = (options: any, value: any = []) => {
    return options?.map((option: any) => {
      return (
        <MenuItem
          key={option[valueSelectionKey]}
          value={option[valueSelectionKey]}
        >
          <Checkbox
            sx={{
              padding: '0 10px',
            }}
            checked={value?.indexOf(option?.[valueSelectionKey]) > -1}
          />
          <ListItemText primary={option[selectionKey]} />
        </MenuItem>
      );
    });
  },
}) => {
  useEffect(() => {
    if (options?.length == 1 && options?.[0]) {
      setValue?.(name, [options?.[0][valueSelectionKey]]);
    }
  }, [name, options, setValue, valueSelectionKey]);
  return (
    <FormControl fullWidth size={size} sx={sx}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => {
          return (
            <Select
              renderValue={(selected) => {
                return (
                  selected
                    ?.map((selectedId: any) => {
                      const item = options.find(
                        (elem) => elem?.[valueSelectionKey] === selectedId
                      );
                      return item?.[selectionKey];
                    })
                    ?.join(', ') || []
                );
              }}
              multiple
              onChange={onChange}
              value={value}
            >
              {generateSingleOptions(options, value)}
            </Select>
          );
        }}
        control={control}
        name={name}
      />
    </FormControl>
  );
};

export default memo(AppMultiSelectField);
