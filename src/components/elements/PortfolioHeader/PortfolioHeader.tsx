import React from 'react';
import { Description } from '../Header/Header.styled';
import { Title } from '../Title/Title.styled';
import { Wrapper } from './PortfolioHeader.styled';

export const PortfolioHeader = () => {
  return (
    <Wrapper>
      <Title>Zobacz moje portfolio</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed condimentum arcu, nec fringilla elit.
        Class aptent taciti sociosqu ad litora.
      </Description>
    </Wrapper>
  );
};
