import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../../layouts/Layout';
import { IPairProps } from '../../../utils/types/pages/pair';
import { Redirect } from '@reach/router';
import { Title } from '../../elements/Title/Title.styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { generatePairElements } from '../../../utils/helpers/generatePairElements';

const Pair = ({ data }: IPairProps) => {
  const { header, previewPhoto } = data.datoCmsPair;
  const isBasicContentFetched = header && previewPhoto;
  console.log(data);
  if (!isBasicContentFetched) return <Redirect noThrow to={``} />;
  return (
    <Layout>
      <Title>{header}</Title>
      <GatsbyImage image={previewPhoto.gatsbyImageData} alt='' />
      {/* {generatePairElements(pairContent)} */}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    datoCmsPair(pairId: { eq: $id }) {
      header
      previewPhoto {
        gatsbyImageData
      }
      pairPhotos {
        gatsbyImageData
      }
      pairDescription {
        paragraph
      }
    }
  }
`;

export default Pair;
