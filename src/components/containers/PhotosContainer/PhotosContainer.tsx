import React, { useEffect } from 'react';
import { PhotoColumn, StyledImage, Wrapper } from './PhotosContainer.styled';
import { splitIntoMultipleArrays } from '../../../utils/helpers/splitIntoMultipleArrays';
import { showElement } from '../../../utils/helpers/showElement';
import { IImageData } from '../../../utils/types/pages/portfolio';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface IPhotosContainerProps {
  columnCount: number;
  images?: { gatsbyImageData: IGatsbyImageData }[];
  indent?: boolean;
}

export const PhotosContainer = ({ images = [], columnCount = 3, indent = false }: IPhotosContainerProps) => {
  const portfolioContentCols = splitIntoMultipleArrays(images, columnCount);

  useEffect(() => {
    const photosContanerElement = document.querySelectorAll<HTMLDivElement>('.photosContanerElement');
    const handleScroll = (e: Event) => showElement(photosContanerElement);

    showElement(photosContanerElement);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper indent={indent}>
      {portfolioContentCols.map((col, idx) => (
        <PhotoColumn key={`col-${idx}`}>
          {col.map((image, photIdx) => (
            <StyledImage
              image={image.gatsbyImageData}
              className={'photosContanerElement'}
              alt='ss'
              key={`col-${idx}-photo-${photIdx}`}
            />
          ))}
        </PhotoColumn>
      ))}
    </Wrapper>
  );
};
