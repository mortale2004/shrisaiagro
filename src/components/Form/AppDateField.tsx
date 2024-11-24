import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { memo } from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';

import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
const AppDateField = ({ name, control, label, size }: FormInputProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            sx={{
              width: '100%',
            }}
            slotProps={{
              textField: {
                error: false,
                size: size,
              },
            }}
            label={label}
            format="DD MMM YYYY"
            value={dayjs.utc(value)}
            onChange={onChange}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default memo(AppDateField);
