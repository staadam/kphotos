import styled, { css } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Wrapper = styled.section<{ indent: boolean }>`
  display: grid;
  column-gap: 30px;

  padding: 30px;
  padding-bottom: 0;
  align-self: center;
  justify-self: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template-columns: repeat(3, 1fr);
    width: 75%;

    & > div:nth-child(1) {
      margin-top: 50px;
    }

    & > div:nth-child(3) {
      margin-top: 50px;
    }

    ${({ indent }) =>
      indent
        ? css`
            grid-area: 1 / 1 / 3 / 3;
            grid-template-rows: 100vh 1fr;

            & > div:nth-child(1) {
              grid-area: 2 / 1 / 3 / 2;
            }

            & > div:nth-child(2) {
              grid-area: 2 / 2 / 3 / 3;
            }

            & > div:nth-child(3) {
              grid-area: 1 / 3 / 3 / 4;
              margin-top: 0px;
            }
          `
        : ''}
  }
`;

export const PhotoColumn = styled.div`
  display: flex;
  flex-direction: column;

  div {
    height: min-content;
  }
`;

export const StyledImage = styled(GatsbyImage)`
  opacity: 0;
  transform: translateY(100px);
  transition: 0.3s opacity, 0.3s transform;
  margin-bottom: 30px;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
