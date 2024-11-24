import { Fonts } from '@/constants/styles';
import { Breakpoint, Dialog, DialogTitle, SxProps, Theme } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useImperativeHandle,
} from 'react';
import { MdClose } from 'react-icons/md';
import AppSlideTransition from '../AppTransition/AppSlideTransition';

export type AppDialogRef = {
  onOpen: () => void;
  onClose: () => void;
};

const AppDialog = forwardRef(
  (
    {
      sxStyle,
      maxWidth = 'sm',
      children,
      dividers = true,
      title,
      fullHeight = false,
      maxScrollHeight,
      icon,
    }: {
      maxWidth?: Breakpoint;
      children: ReactNode;
      title?: string | ReactNode;
      dividers?: boolean;
      fullHeight?: boolean;
      actionTitle?: string;
      maxScrollHeight?: number;
      sxStyle?: SxProps<Theme>;
      icon?: ReactNode;
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const onClose = useCallback(() => setOpen(false), []);
    useImperativeHandle(
      ref,
      () => ({
        onOpen: () => setOpen(true),
        onClose: onClose,
      }),
      [onClose]
    );

    return (
      <Dialog
        sx={{
          '& .MuiDialog-paper': {
            width: '100%',
            // marginTop: "-100px",
          },
          '& .MuiDialogContent-root': {
            overflowY: 'scroll',
          },
          ...sxStyle,
        }}
        open={open}
        maxWidth={maxWidth}
        TransitionComponent={AppSlideTransition}
        tabIndex={-1}
      >
        <DialogTitle
          sx={{
            fontSize: 14,
            fontWeight: Fonts.BOLD,
            display: 'flex',
            alignItems: 'center',
            pr: 15,
          }}
          id="app-dialog-title"
        >
          {icon}
          {title}
          <IconButton
            aria-label="close"
            sx={{
              position: 'absolute',
              right: 4,
              top: 4,
              color: 'grey.500',
            }}
            onClick={onClose}
            size="large"
          >
            <MdClose />
          </IconButton>
        </DialogTitle>
        <DialogContent
          dividers={dividers}
          sx={{
            overflow: 'scroll',
            maxHeight: '80vh',
          }}
        >
          {children}
          {/* <AppScrollBar
            sx={{
              paddingTop: 1,
              height: fullHeight ? "70vh" : "100%",
              minHeight: "300px",
              maxHeight: maxScrollHeight ? maxScrollHeight : "400px",
              paddingRight: 6,
              paddingLeft: 6,
            }}
          >
            {children}
          </AppScrollBar> */}
        </DialogContent>
      </Dialog>
    );
  }
);

AppDialog.displayName = 'AppDialog';

export default AppDialog;
