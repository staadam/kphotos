import styled from 'styled-components';

export const Wrapper = styled.header`
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
