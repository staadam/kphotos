import React from 'react';
import styled from 'styled-components';
import { Description } from '../Header/Header.styled';
import { Title } from '../Title/Title.styled';

const Wrapper = styled.header`
  display: flex;
  justify-self: center;
  flex-direction: column;

  width: 80%;
  padding: 0;
  margin-top: 100px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    justify-content: center;
    width: 100%;
    padding-left: 75px;
    grid-area: 1 / 1 / 2 / 2;
  }

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
