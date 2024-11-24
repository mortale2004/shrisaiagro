export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: Function;
  options?: any[];
  generateSingleOptions?: Function;
  selectionKey?: string;
  valueSelectionKey?: string;
  fullWidth?: boolean;
  size?: any;
  sx?: any;
  generateRadioOptions?: Function;
  handleChange?: (...params: any) => void;
}
