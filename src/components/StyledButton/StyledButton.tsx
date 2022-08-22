import React from 'react';
import { ButtonWrapper } from './StyledButton.styled';
import { IStyledButtonProps } from './StyledButtonTypes';

export const StyledButton = ({ children, ...rest }: IStyledButtonProps) => {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};
