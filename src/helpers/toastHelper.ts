import { toast, ToastOptions } from 'react-toastify';

const toastConfig: ToastOptions = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const successToast = (message: string) =>
  toast.success(message, toastConfig);

export const errorToast = (message: string) =>
  toast.error(message, toastConfig);

export const warningToast = (message: string) =>
  toast.warning(message, toastConfig);
