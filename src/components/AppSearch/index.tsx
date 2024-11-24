import { FormControl, InputAdornment, TextField, Theme } from '@mui/material';
import { SxProps } from '@mui/system/styleFunctionSx';
import React, { memo, useCallback, useState } from 'react';
import { FcSearch } from 'react-icons/fc';

type AppSearchProps = {
  iconPosition?: string;
  align?: string;
  placeholder?: string;
  overlap?: boolean;
  borderLight?: boolean;
  className?: string;
  onlyIcon?: boolean;
  disableFocus?: boolean;
  iconStyle?: SxProps<Theme>;
  sx?: SxProps<Theme>;
  handleSearch: (value: string, name: string) => void;
  [x: string]: any;
  initialValue?: string;
  name?: string;
  fullWidth?: boolean;
  hasSearchIcon?: boolean;
};

let timeOut: any = null;
const AppSearch: React.FC<AppSearchProps> = ({
  placeholder,
  iconPosition = 'left',
  align = 'left',
  overlap = true,
  onlyIcon = false,
  disableFocus,
  iconStyle = {
    color: 'grey',
  },
  sx,
  initialValue,
  handleSearch,
  name = 'search',
  fullWidth = true,
  hasSearchIcon = true,
  ...rest
}) => {
  const [searchValue, setSearchValue] = useState<string>(initialValue || '');

  // const debouncedHandleSearch = (value: any) =>
  //   debounce(() => handleSearch(value), 1000);

  const onChange = useCallback(
    (e: any) => {
      setSearchValue(e.target.value);
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        handleSearch(e.target.value, e.target.name);
      }, 1000);
    },
    [handleSearch]
  );

  return (
    <FormControl fullWidth={fullWidth}>
      <TextField
        size="small"
        variant="outlined"
        label={placeholder}
        name={name}
        placeholder={placeholder}
        value={searchValue}
        onChange={onChange}
        InputProps={{
          startAdornment: hasSearchIcon ? (
            <InputAdornment position="start">
              <FcSearch />
            </InputAdornment>
          ) : undefined,
        }}
      />
    </FormControl>
  );
};

export default memo(AppSearch);
