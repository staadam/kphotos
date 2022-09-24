import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { TPairContent } from '../types/pages/pair';

export const generatePairElements = (pairContent: TPairContent) => {
  return pairContent.map((element) => {
    if (element.paragraph) return <p key={element.id}>{element.paragraph}</p>;
    if (element.image) return <GatsbyImage key={element.id} image={element.image.gatsbyImageData} alt='' />;
  });
};
