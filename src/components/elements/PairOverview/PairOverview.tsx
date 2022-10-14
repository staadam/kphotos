import React from 'react';

import { Title } from '../Title/Title.styled';
import { Wrapper, DescriptionWrapper, StyledImage, DescriptionParagraph } from './PairOverview.styled';

import { IPairOverviewProps } from '../../../utils/types/pages/pair';
import { splitIntoSpanArray } from '../../../utils/helpers/splitIntoSpanArray';

export const PairOverview = ({ header, pairDescription = [], previewPhoto }: IPairOverviewProps) => {
  const orientation = previewPhoto.resolutions.aspectRatio > 1 ? 'horizontal' : 'vertical';
  const title = splitIntoSpanArray(header);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <DescriptionWrapper>
        <StyledImage image={previewPhoto.gatsbyImageData} alt='' orientation={orientation} />
        {pairDescription.map(({ paragraph }, index) => (
          <DescriptionParagraph key={`pair-description-${index}`}>{paragraph}</DescriptionParagraph>
        ))}
      </DescriptionWrapper>
    </Wrapper>
  );
};
