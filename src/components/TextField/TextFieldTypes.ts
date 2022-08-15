export interface ITextFieldProps {
  id: string;
  name: string;
  label: string;
  value: number | string | boolean;
  isInvalid: boolean;

  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any, Element>) => void;

  type?: string;
  isTextarea?: boolean;
}
