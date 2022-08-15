import styled from 'styled-components';

export const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;

  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  border-bottom: 2px solid gold;
`;
