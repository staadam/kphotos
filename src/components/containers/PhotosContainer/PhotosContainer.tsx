import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { PhotoColumn, StyledImage, Wrapper } from './PhotosContainer.styled';
import { splitIntoMultipleArrays } from '../../../utils/helpers/splitIntoMultipleArrays';
import { showElement } from '../../../utils/helpers/showElement';

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

  useEffect(() => {
    const portfolioElements = document.querySelectorAll<HTMLDivElement>('.portfolioElement');
    const handleScroll = (e: Event) => showElement(portfolioElements);

    showElement(portfolioElements);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper>
      {portfolioContentCols.map((col, idx) => (
        <PhotoColumn key={`col-${idx}`}>
          {col.map((image, photIdx) => (
            <StyledImage
              image={image.gatsbyImageData}
              className={'portfolioElement'}
              alt='ss'
              key={`col-${idx}-photo-${photIdx}`}
            />
          ))}
        </PhotoColumn>
      ))}
    </Wrapper>
  );
};
