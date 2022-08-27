import { FieldInputProps } from 'formik';

export interface ITextFieldProps {
  id: string;
  label: string;
  value: number | string | boolean;
  isInvalid: boolean;
  field: FieldInputProps<string>;

  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any, Element>) => void;

  type?: string;
  isTextarea?: boolean;
}
