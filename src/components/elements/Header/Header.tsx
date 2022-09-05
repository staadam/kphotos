import React from 'react';
import { Title } from '../Title/Title.styled';
import { Wrapper, Description } from './Header.styled';

export const Header = () => {
  return (
    <Wrapper>
      <Title>
        Witaj, <span>Lorem Ipsum</span>
      </Title>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
    </Wrapper>
  );
};
