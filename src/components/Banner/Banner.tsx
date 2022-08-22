import { IGatsbyImageData } from 'gatsby-plugin-image';
import React, { forwardRef } from 'react';
import { HeroImage } from '../HeroImage/HeroImage';
import { Wrapper } from './Banner.styled';

export const Banner = forwardRef<HTMLDivElement, { image: IGatsbyImageData; alt: string }>(
  ({ image, alt }, ref) => {
    return (
      <Wrapper ref={ref}>
        <HeroImage image={image} alt={alt} />
      </Wrapper>
    );
  }
);
