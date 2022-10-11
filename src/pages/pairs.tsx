import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/layouts/Layout';
import { Wrapper } from '../components/pages/PairsPage/PairsPage.styled';
import { PairPreviewLink } from '../components/elements/PairPreviewLink/PairPreviewLink';

import { IPairsProps } from '../utils/types/pages/pairs';
import { animatePairs } from '../utils/animations/pages/pairs';
import { splitIntoMultipleArrays } from '../utils/helpers/splitIntoMultipleArrays';

const Pairs = ({ data }: IPairsProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pairColumns = splitIntoMultipleArrays(data.allDatoCmsPair.nodes, 2);

  useEffect(() => {
    animatePairs(wrapperRef);
  }, []);

  return (
    <Layout>
      <Wrapper ref={wrapperRef}>
        {pairColumns.map((pairColumn, colIdx) => (
          <div>
            {pairColumn.map((node, idx) => (
              <PairPreviewLink pairData={node} key={`pair-${colIdx}-${idx}`} />
            ))}
          </div>
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
          gatsbyImageData(width: 720)
        }
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

export default Pairs;
