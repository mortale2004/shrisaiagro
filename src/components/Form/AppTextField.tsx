import { InputBaseComponentProps } from '@mui/material';
import TextField from '@mui/material/TextField';
import { memo } from 'react';
import { Controller } from 'react-hook-form';

const AppTextField = ({
  name,
  control,
  label,
  type = 'text',
  disabled = false,
  autoFucus,
  inputProps,
  size = 'small',
  sx,
  multiline,
  rows,
}: {
  sx?: object;
  name: string;
  control: any;
  label: string;
  type?: string;
  disabled?: boolean;
  autoFucus?: boolean;
  inputProps?: InputBaseComponentProps;
  size?: any;
  multiline?: boolean;
  rows?: number;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          multiline={multiline}
          rows={rows}
          sx={sx}
          type={type}
          helperText={error ? error.message : null}
          size={size}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          disabled={disabled}
          autoFocus={autoFucus}
          inputProps={inputProps}
          variant="outlined"
          onWheel={(event: any) => {
            event.preventDefault();
          }}
        />
      )}
    />
  );
};

export default memo(AppTextField);
