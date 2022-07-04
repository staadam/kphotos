import React from 'react';
import styled from 'styled-components';
import { Description } from '../Header/Header.styled';
import { Title } from '../Title/Title.styled';

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: 1 / 1 / 2 / 2;
  height: 100%;
  padding-left: 75px;

  * {
    color: ${({ theme }) => theme.colors.main};
  }
`;

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
