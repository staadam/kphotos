import React, { useEffect, useRef } from 'react';
import { Layout } from '../components/layouts/Layout';
import { PhotosContainer } from '../components/containers/PhotosContainer/PhotosContainer';
import { PortfolioHeader } from '../components/elements/PortfolioHeader/PortfolioHeader';
import { Wrapper } from '../components/pages/PortfolioPage/PortfolioPage.styled';
import { animatePortfolioPage } from '../utils/animations/pages/portfolio';

const Portfolio = () => {
  const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    animatePortfolioPage(wrapperRef);
  });

  return (
    <Layout>
      <Wrapper ref={wrapperRef}>
        <PortfolioHeader />
        <PhotosContainer />
      </Wrapper>
    </Layout>
  );
};

export default Portfolio;
