import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import { memo } from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';

const AppCheckBoxField: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  sx,
  options = [
    {
      _id: true,
      value: 'Yes',
    },
    {
      _id: false,
      value: 'No',
    },
  ],
  valueSelectionKey = '_id',
  selectionKey = 'value',
  generateRadioOptions = (value: any, onChange: any) =>
    options?.map((singleOption, index) => {
      return (
        <FormControlLabel
          key={index}
          onChange={(event: any) => {
            if (event.target.checked) {
              onChange([...value, singleOption?._id]);
            } else {
              onChange(
                value?.filter((item: any) => item !== singleOption?._id)
              );
            }
          }}
          checked={value?.includes(singleOption?._id)}
          value={singleOption?.[valueSelectionKey]}
          label={singleOption?.[selectionKey]}
          control={<Checkbox />}
        />
      );
    }),
}) => {
  return (
    <FormControl fullWidth className="flex-center">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          '& .MuiFormGroup-root': {
            flexDirection: 'row',
          },
          ...sx,
        }}
      >
        <FormLabel component="legend">{label}</FormLabel>
        <Controller
          name={name}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => generateRadioOptions(value, onChange)}
        />
      </Box>
    </FormControl>
  );
};

export default memo(AppCheckBoxField);
