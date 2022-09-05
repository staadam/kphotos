import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 40px;
`;

export const StypedLabel = styled.label<{ isInvalid: boolean }>`
  order: 1;
  display: block;
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  color: ${({ theme: { colors } }) => colors.main};

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;

    top: 100%;
    left: 0;

    width: 100%;
    height: 2px;
    background-color: ${({ isInvalid, theme: { colors } }) => (isInvalid ? colors.error : colors.main)};
  }

  &::before {
    transform-origin: right center;
  }

  &::after {
    transform: scaleX(0);
    transform-origin: left center;
  }

  *:focus + &::before {
    transform: scaleX(0);
    transition: transform 0.4s;
  }

  *:focus + &::after {
    transform: scaleX(1);
    transition: transform 0.4s 0.2s;
  }
`;

export const StyledInput = styled.input`
  order: 2;
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 3px 8px;

  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  color: ${({ theme: { colors } }) => colors.main};
`;

export const StyledTextarea = styled.textarea`
  order: 2;
  position: relative;
  display: block;
  width: 100%;
  min-height: 200px;
  margin-top: 8px;

  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  color: ${({ theme: { colors } }) => colors.main};
`;
