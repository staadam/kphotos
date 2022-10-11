import React from 'react';
import { StyledLink, Label, StyledImage } from './PairPreviewLink.styled';
import { IPairData } from '../../../utils/types/pages/pairs';

export const PairPreviewLink = ({ pairData }: { pairData: IPairData }) => {
  const { pairId, header, previewPhoto } = pairData;

  return (
    <div>
      <StyledLink to={`/pair/${pairId}`}>
        <StyledImage alt={header} image={previewPhoto.gatsbyImageData} />
        <Label>{header}</Label>
      </StyledLink>
    </div>
  );
};
