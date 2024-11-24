import { FormLabel, Slider } from '@mui/material';
import { memo } from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';

interface AppSliderProps extends FormInputProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number[];
  handleChange: (e: Event, value: number | number[]) => void;
  valueLabelDisplay?: any;
  marks?: any[];
  sx?: object;
}

export const AppSlider = ({
  name,
  control,
  setValue,
  label,
  min = 0,
  max = 100,
  step = 1,
  value = [min, max],
  handleChange,
  marks = [],
  valueLabelDisplay = 'auto',
  sx,
}: AppSliderProps) => {
  return (
    <>
      <FormLabel
        sx={{
          textAlign: 'center',
        }}
        component="legend"
      >
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          <Slider
            sx={sx}
            value={value}
            onChange={handleChange}
            valueLabelDisplay={valueLabelDisplay}
            min={min}
            max={max}
            step={step}
            marks={marks}
          />
        )}
      />
    </>
  );
};
export default memo(AppSlider);
