import React from 'react';
import { ITextFieldProps } from './TextFieldTypes';
import { StyledInput, StypedLabel, StyledTextarea, Wrapper } from './TextField.styled';

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
  if (isTextarea) {
    return (
      <Wrapper>
        <StyledTextarea id={id} name={name} {...rest} />
        <StypedLabel htmlFor={id}>{label}</StypedLabel>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <StyledInput id={id} name={name} type={type} {...rest} />
      <StypedLabel htmlFor={id}>{label}</StypedLabel>
    </Wrapper>
  );
};
