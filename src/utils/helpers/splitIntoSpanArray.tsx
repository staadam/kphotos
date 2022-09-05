import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  display: inline-block;
  white-space: pre-wrap !important;
`;

export const splitIntoSpanArray = (text: string) =>
  [...text].map((letter, idx) => <StyledSpan key={`SplitText-${idx}-${Math.random()}`}>{letter}</StyledSpan>);
