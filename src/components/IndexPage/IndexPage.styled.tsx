import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};

  visibility: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template-columns: 1fr 40%;
  }
`;
