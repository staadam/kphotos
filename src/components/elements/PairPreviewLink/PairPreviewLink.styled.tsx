import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  position: relative;
  display: block;
  box-shadow: 0px 0px 20px -10px ${({ theme: { colors } }) => colors.main};
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 20px -7px ${({ theme: { colors } }) => colors.main};
    transform: scale(1.01);
  }
`;

export const Label = styled.h3`
  position: absolute;
  left: -15px;
  bottom: 15%;

  padding: 15px 20px;
  max-width: 80%;
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};

  color: ${({ theme: { colors } }) => colors.main};
  background-color: ${({ theme: { colors } }) => colors.black};
  transition: transform 0.3s ease;

  ${StyledLink}:hover & {
    transform: translateX(15px);
  }
`;
