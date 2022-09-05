import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';

import { IPairsProps } from '../utils/types/pages/pairs';

import { Layout } from '../components/layouts/Layout';
import { Wrapper } from '../components/pages/PairsPage/PairsPage.styled';
import { PairPreviewLink } from '../components/elements/PairPreviewLink/PairPreviewLink';

const Pairs = ({ data }: IPairsProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  console.log(data);
  // useEffect(() => {
  //   animateHomePage(wrapperRef);
  // }, []);

  return (
    <Layout>
      <Wrapper>
        {[...new Array(5)].map(() =>
          data.allDatoCmsPair.nodes.map((node) => <PairPreviewLink pairData={node} />)
        )}
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    allDatoCmsPair {
      nodes {
        id
        header
        previewPhoto {
          gatsbyImageData
        }
      }
    }
  }
`;

export default Pairs;
