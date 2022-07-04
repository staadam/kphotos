import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const StyledGatsbyImage = styled(GatsbyImage)`
  min-width: 100%;
  min-height: 100%;
`;

interface IHeroImageProps {
  image: IGatsbyImageData;
  alt: string;
}

export const HeroImage = ({ image, alt }: IHeroImageProps) => {
  return <StyledGatsbyImage image={image} alt={alt} />;
};
