import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import { Redirect } from '@reach/router';

import { Layout } from '../../layouts/Layout';
import { PhotosContainer } from '../../containers/PhotosContainer/PhotosContainer';
import { PairOverview } from '../../elements/PairOverview';

import { IPairProps } from '../../../utils/types/pages/pair';
import { Wrapper } from './Pair.styled';
import { animatePair } from '../../../utils/animations/pages/pair';

const Pair = ({ data }: IPairProps) => {
  const { header, previewPhoto, pairPhotos, pairDescription } = data.datoCmsPair;
  const isBasicContentFetched = header && previewPhoto;

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animatePair(wrapperRef);
  }, []);

  if (!isBasicContentFetched) return <Redirect noThrow to={`/404`} />;

  return (
    <Layout>
      <Wrapper ref={wrapperRef}>
        <PairOverview header={header} previewPhoto={previewPhoto} pairDescription={pairDescription} />
        {pairPhotos.length > 0 ? <PhotosContainer columnCount={3} images={pairPhotos} /> : null}
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    datoCmsPair(pairId: { eq: $id }) {
      header
      previewPhoto {
        gatsbyImageData(width: 720)
        resolutions {
          aspectRatio
        }
      }
      pairPhotos {
        gatsbyImageData(width: 500)
      }
      pairDescription {
        paragraph
      }
    }
  }
`;

export const Head = () => (
  <>
    <title>Galeria Par *work title*</title>
    <meta name='description' content='Best photographer in Poland' />
    <meta property='og:title' content='Kontakt *work title*' />
    <meta property='og:description' content='Best photographer in Poland' />
  </>
);

export default Pair;
