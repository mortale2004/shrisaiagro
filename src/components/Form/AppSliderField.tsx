import { Slider } from '@mui/material';
import { memo } from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';

interface AppSliderFieldProps extends FormInputProps {
  step?: number;
}

export const AppSliderField = ({
  name,
  control,
  label,
  step = 1,
}: AppSliderFieldProps) => {
  // const hookForm = useForm({
  //   defaultValues: {
  //     [name]: [MARKS[1].value, MARKS[4].value],
  //   },
  // });

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Slider
          {...field}
          orientation="horizontal"
          aria-label="Oxygen Saturation Range"
          valueLabelDisplay="auto"
          min={field.value[0]}
          max={field.value[1]}
          step={step}
          disableSwap
        />
      )}
    />
  );
};
export default memo(AppSliderField);
