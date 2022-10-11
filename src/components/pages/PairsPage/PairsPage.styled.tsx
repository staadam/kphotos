import styled from 'styled-components';

export const Wrapper = styled.section`
  --gridGap: 75px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(350px, calc(50% - var(--gridGap))), 1fr));
  gap: var(--gridGap);

  width: 75%;
  min-width: 400px;
  margin: 150px auto var(--gridGap);
  visibility: hidden;

  & > div {
    display: flex;
    flex-direction: column;
    gap: var(--gridGap);
  }
`;
