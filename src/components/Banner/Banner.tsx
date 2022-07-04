import React, { forwardRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeroImage } from '../HeroImage/HeroImage';
import { Wrapper } from './Banner.styled';

export const Banner = forwardRef<HTMLDivElement>((props, ref) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "photographer.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }
    }
  `);

  return (
    <Wrapper ref={ref}>
      <HeroImage image={data.file.childImageSharp.gatsbyImageData} alt='Hero image' />
    </Wrapper>
  );
});
