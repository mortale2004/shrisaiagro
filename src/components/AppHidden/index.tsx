'use client';
import { Typography } from '@mui/material';
import { FC } from 'react';
import { FaEye } from 'react-icons/fa';

type AppHiddenProps = {
  width?: string;
  password: string;
};

const AppHidden: FC<AppHiddenProps> = ({ width = '100%', password }) => {
  return (
    <Typography
      component={'span'}
      sx={{
        'position:': 'relative',
        width: width,
        display: 'inline-block',
        overflow: 'hidden',
        '& svg': {
          visibility: 'visible',
          position: 'absolute',
          fontSize: 22,
          ml: '15px',
        },
        '& span': {
          display: 'block',
          visibility: 'hidden',
        },
        '&:hover svg': {
          visibility: 'hidden',
        },
        '&:hover span': {
          visibility: 'visible',
        },
        color: 'currentColor',
      }}
    >
      <Typography
        component="span"
        sx={{
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        onClick={(event) => navigator.clipboard.writeText(password)}
      >
        <FaEye /> {password}
      </Typography>
    </Typography>
  );
};

export default AppHidden;
