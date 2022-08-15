import React from 'react';
import { ITextFieldProps } from './TextFieldTypes';
import { StyledInput } from '../StyledInput/StyledInput.styled';

export const TextField = ({
  id,
  name,
  label,
  type = 'text',
  isTextarea = false,
  onChange,
  value,
  isInvalid,
  ...rest
}: ITextFieldProps) => {
  console.log(name, isInvalid);

  if (isTextarea) return <textarea id={id} name={name} {...rest} />;
  return <StyledInput id={id} name={name} type={type} {...rest} />;
};
