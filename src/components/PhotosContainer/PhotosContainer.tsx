import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { PhotoColumn, StyledImage, Wrapper } from './PhotosContainer.styled';
import { showElement } from '../../helpers/showElement';
import { splitIntoMultipleArrays } from '../../helpers/splitIntoMultipleArrays';

interface IImageData {
  datoCmsPortfolio: {
    portfolioContent: { gatsbyImageData: IGatsbyImageData }[];
  };
}

export const PhotosContainer = () => {
  const data = useStaticQuery<IImageData>(graphql`
    {
      datoCmsPortfolio {
        portfolioContent {
          gatsbyImageData(placeholder: BLURRED, width: 500)
        }
      }
    }
  `);

  const { portfolioContent } = data.datoCmsPortfolio;
  const portfolioContentCols = splitIntoMultipleArrays(portfolioContent, 3);

  console.log(portfolioContentCols);

  return (
    <Wrapper>
      {portfolioContentCols.map((col, idx) => (
        <PhotoColumn key={`col-${idx}`}>
          {col.map((image, photIdx) => (
            <StyledImage image={image.gatsbyImageData} alt='ss' key={`col-${idx}-photo-${photIdx}`} />
          ))}
        </PhotoColumn>
      ))}
    </Wrapper>
  );
};
