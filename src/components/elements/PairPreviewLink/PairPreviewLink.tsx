import React from 'react';
import { IPairData } from '../../../utils/types/pages/pairs';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StyledLink } from './PairPreviewLink.styled';

export const PairPreviewLink = ({ pairData }: { pairData: IPairData }) => {
  const { id, header, previewPhoto } = pairData;

  return (
    <StyledLink to={`/pair/${id}`}>
      <GatsbyImage alt={''} image={previewPhoto.gatsbyImageData} />
      {/* <Label>{header}</Label> */}
    </StyledLink>
  );
};
