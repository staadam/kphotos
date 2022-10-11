import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layouts/Layout';
import { PhotosContainer } from '../components/containers/PhotosContainer/PhotosContainer';
import { PortfolioHeader } from '../components/elements/PortfolioHeader/PortfolioHeader';
import { Wrapper } from '../components/pages/PortfolioPage/PortfolioPage.styled';
import { animatePortfolioPage } from '../utils/animations/pages/portfolio';
import { IPortfolioProps } from '../utils/types/pages/portfolio';

const Portfolio = ({ data }: IPortfolioProps) => {
  const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    animatePortfolioPage(wrapperRef);
  });

  return (
    <Layout>
      <Wrapper ref={wrapperRef}>
        <PortfolioHeader />
        <PhotosContainer columnCount={3} images={data.datoCmsPortfolio.portfolioContent} indent />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    datoCmsPortfolio {
      portfolioContent {
        gatsbyImageData(placeholder: BLURRED, width: 500)
      }
    }
  }
`;

export const Head = () => (
  <>
    <title>Portfolio *work title*</title>
    <meta name='description' content='Best photographer in Poland' />
    <meta property='og:title' content='Kontakt *work title*' />
    <meta property='og:description' content='Best photographer in Poland' />
  </>
);

export default Portfolio;
