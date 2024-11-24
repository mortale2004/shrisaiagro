import theme from '@/theme';
import Box from '@mui/material/Box';
import React, { memo } from 'react';
import { DropzoneState } from 'react-dropzone';
import { TiFolderOpen } from 'react-icons/ti';

type Props = {
  uploadText?: string;
  dropzone: DropzoneState;
  customContent?: React.ReactNode;
};

const AppUploadModern = ({ customContent, uploadText, dropzone }: Props) => {
  return (
    <Box
      sx={{
        position: 'relative',
        '& ul': {
          listStyle: 'none',
          padding: 0,
        },
      }}
    >
      <Box
        {...dropzone.getRootProps({ className: 'dropzone' })}
        sx={{
          cursor: 'pointer',
          border: (theme) => `dashed 2px ${theme.palette.divider}`,
          borderRadius: 2.5,
          p: 5,
          textAlign: 'center',
          mb: 4,
          color: 'text.secondary',
          backgroundColor: 'background.default',
        }}
      >
        <input {...dropzone.getInputProps()} />
        {customContent ? (
          customContent
        ) : (
          <>
            <TiFolderOpen
              style={{
                fontSize: 40,
                marginBottom: 4,
                color: theme.palette.primary.main,
              }}
            />
            <p>{uploadText}</p>
          </>
        )}
      </Box>
    </Box>
  );
};

export default memo(AppUploadModern);
