import React from 'react';
import { ITextFieldProps } from './TextFieldTypes';
import { StyledInput, StypedLabel, StyledTextarea, Wrapper } from './TextField.styled';

export const TextField = ({
  id,
  label,
  type = 'text',
  isTextarea = false,
  onChange,
  value,
  isInvalid,
  field,
  ...rest
}: ITextFieldProps) => {
  if (isTextarea) {
    return (
      <Wrapper>
        <StyledTextarea id={id} {...rest} {...field} />
        <StypedLabel htmlFor={id} isInvalid={isInvalid}>
          {label}
        </StypedLabel>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <StyledInput id={id} type={type} {...rest} {...field} />
      <StypedLabel htmlFor={id} isInvalid={isInvalid}>
        {label}
      </StypedLabel>
    </Wrapper>
  );
};
