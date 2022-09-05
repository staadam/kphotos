import React from 'react';
import { Description } from '../Header/Header.styled';
import { Title } from '../Title/Title.styled';
import { Wrapper } from './PortfolioHeader.styled';
import { splitIntoSpanArray } from '../../../utils/helpers/splitIntoSpanArray';

export const PortfolioHeader = () => {
  const spanTitle = splitIntoSpanArray('Zobacz moje portfolio');

  return (
    <Wrapper>
      <Title>{spanTitle}</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed condimentum arcu, nec fringilla elit.
        Class aptent taciti sociosqu ad litora.
      </Description>
    </Wrapper>
  );
};
