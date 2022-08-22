import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  position: relative;
  display: block;
  z-index: 0;

  width: min-content;
  padding: 3px 12px;

  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  color: ${({ theme: { colors } }) => colors.main};
  white-space: nowrap;

  transition: color 0.05s 0.05s;

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    background-color: ${({ theme: { colors } }) => colors.main};
    z-index: -1;
  }

  &::before {
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    transform: scaleX(0);
    transition: transform 0.2s;
    transform-origin: right center;
  }

  &::after {
    top: 100%;
    left: 0;

    height: 2px;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.white};

    &::before {
      transform: scaleX(1);
      transform-origin: left center;
    }
  }
`;
