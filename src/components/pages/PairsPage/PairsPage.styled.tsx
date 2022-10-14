import styled from 'styled-components';

export const Wrapper = styled.section`
  --gridGap: calc(25vw / 2);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gridGap);

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    --gridGap: 75px;
    grid-template-columns: 1fr 1fr;
  }

  width: 75%;
  margin: 150px auto var(--gridGap);
  visibility: hidden;

  & > div {
    display: flex;
    flex-direction: column;
    gap: var(--gridGap);
  }
`;
