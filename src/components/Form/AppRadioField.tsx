import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { memo } from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';

const AppRadioField: React.FC<
  FormInputProps & { sxStyle?: any; fullWidth?: boolean }
> = ({
  name,
  control,
  label,
  sx,
  sxStyle,
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
  generateRadioOptions = () =>
    options?.map((singleOption, index) => (
      <FormControlLabel
        key={index}
        value={singleOption?.[valueSelectionKey]}
        label={singleOption?.[selectionKey]}
        control={<Radio />}
      />
    )),
  fullWidth = true,
}) => {
  return (
    <FormControl fullWidth={fullWidth} className="flex-center" sx={sxStyle}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          '& .MuiFormGroup-root': {
            flexDirection: 'row',
          },
          gap: 3,
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
          }) => (
            <RadioGroup value={value} onChange={onChange}>
              {generateRadioOptions()}
            </RadioGroup>
          )}
        />
      </Box>
    </FormControl>
  );
};

export default memo(AppRadioField);
