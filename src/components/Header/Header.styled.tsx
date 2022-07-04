import styled from 'styled-components';

export const Wrapper = styled.div`
  justify-self: center;
  align-self: center;
  width: 100%;
  max-width: 300px;
  font-size: ${({ theme }) => theme.fontSize.s};

  * {
    color: ${({ theme }) => theme.colors.main};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    max-width: 500px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    max-width: none;
    width: 90%;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: right;
  }
`;

export const Description = styled.p`
  margin-top: 30px;
  font-size: 1.4em;
  line-height: 1.75;
`;
