import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    display: block;
  }
`;
