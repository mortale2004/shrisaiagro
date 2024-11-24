'use client';
import { Fonts } from '@/constants/styles';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import Button from '@mui/material/Button';
import React, {
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useState,
} from 'react';
import AppSlideTransition from '../AppTransition/AppSlideTransition';

export type ConfirmDialogRef = {
  onOpen: () => void;
  onClose: () => void;
};

const AppConfirmDialog = forwardRef(
  (
    {
      content,
      onDeny,
      onConfirm,
      title,
      icon,
      dividers = true,
      isDisabled = false,
      isOpen = false,
      confirmButtonText = 'Yes',
      denyButtonText = 'No',
    }: {
      content?: Function;
      onDeny: (value: boolean) => void;
      onConfirm: () => void;
      title: string;
      dividers?: boolean;
      icon: ReactNode;
      isDisabled?: boolean;
      isOpen?: boolean;
      confirmButtonText?: string;
      denyButtonText?: string;
    },
    ref
  ) => {
    const [open, setOpen] = useState(isOpen);

    useImperativeHandle(
      ref,
      () => ({
        onOpen: () => setOpen(true),
        onClose: () => setOpen(false),
      }),
      []
    );
    return (
      <Dialog
        TransitionComponent={AppSlideTransition}
        open={open}
        onClose={() => onDeny(false)}
      >
        <DialogTitle
          sx={{
            fontWeight: Fonts.BOLD,
            p: 2,
            px: 5,
            fontSize: 16,
            display: 'flex',
            alignItems: 'center',
            textTransform: 'capitalize',
            '& svg': {
              mr: 1,
            },
          }}
        >
          {icon}
          {title}
        </DialogTitle>
        <DialogContent
          dividers={dividers}
          sx={{ color: 'text.secondary', fontSize: 14 }}
          id="alert-dialog-description"
        >
          {content?.()}
        </DialogContent>
        <DialogActions
          sx={{
            pb: 5,
            px: 6,
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontWeight: Fonts.MEDIUM,
            }}
            onClick={onConfirm}
            color="primary"
            autoFocus
            disabled={isDisabled}
          >
            {confirmButtonText}
          </Button>
          <Button
            variant="contained"
            sx={{
              fontWeight: Fonts.MEDIUM,
            }}
            onClick={() => onDeny(false)}
            color="secondary"
          >
            {denyButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);

AppConfirmDialog.displayName = 'AppConfirmDialog';

export default React.memo(AppConfirmDialog);
