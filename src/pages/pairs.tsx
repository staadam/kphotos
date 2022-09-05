import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/layouts/Layout';
import { Wrapper } from '../components/pages/PairsPage/PairsPage.styled';
import { PairPreviewLink } from '../components/elements/PairPreviewLink/PairPreviewLink';

import { IPairsProps } from '../utils/types/pages/pairs';
import { animatePairs } from '../utils/animations/pages/pairs';

const Pairs = ({ data }: IPairsProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animatePairs(wrapperRef);
  }, []);

  return (
    <Layout>
      <Wrapper ref={wrapperRef}>
        {data.allDatoCmsPair.nodes.map((node) => (
          <PairPreviewLink pairData={node} key={node.pairId} />
        ))}
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    allDatoCmsPair {
      nodes {
        pairId
        header
        previewPhoto {
          gatsbyImageData
        }
      }
    }
  }
`;

export default Pairs;
