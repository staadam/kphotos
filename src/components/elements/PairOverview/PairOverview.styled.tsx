import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Title } from '../Title/Title.styled';

export const Wrapper = styled.section`
  width: 75%;
  margin-top: 150px;
  color: ${({ theme }) => theme.colors.main};
  visibility: hidden;

  ${Title} {
    text-align: right;
  }
`;

export const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 75px;

  margin-top: 50px;
  margin-bottom: 100px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template-columns: 3fr 2fr;
  }
`;

export const StyledImage = styled(GatsbyImage)<{ orientation: string }>`
  grid-row: 2 / 3;
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-row: 1 / 2;
    grid-column: ${({ orientation }) => (orientation === 'horizontal' ? '1 / 2' : '2 / 3')};
  }
`;

export const DescriptionParagraph = styled.p`
  line-height: 1.5;
  justify-self: center;
  align-self: center;

  font-size: ${({ theme }) => theme.fontSize.m};

  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    &:not(:first-of-type) {
      grid-column: 1 / 3;
    }
  }
`;
