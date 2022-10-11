import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Title } from '../Title/Title.styled';

export const Wrapper = styled.section`
  width: 75%;
  margin-top: 150px;
  color: ${({ theme }) => theme.colors.main};

  ${Title} {
    text-align: right;
  }
`;

export const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 75px;

  margin-top: 50px;
  margin-bottom: 100px;
`;

export const StyledImage = styled(GatsbyImage)<{ orientation: string }>`
  grid-row: 1 / 2;
  grid-column: ${({ orientation }) => (orientation === 'horizontal' ? '1 / 2' : '2 / 3')};
`;

export const DescriptionParagraph = styled.p`
  line-height: 1.5;
  justify-self: center;
  align-self: center;

  font-size: ${({ theme }) => theme.fontSize.m};

  text-align: center;

  &:not(:first-of-type) {
    grid-column: 1 / 3;
  }
`;
