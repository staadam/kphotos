import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  font-size: 1.5em;
  padding: 10px 20px;
  margin-top: 100px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin: 0;
  }
`;

export const Logo = () => {
  return (
    <LogoWrapper>
      <Link to='/'>KP</Link>
    </LogoWrapper>
  );
};
