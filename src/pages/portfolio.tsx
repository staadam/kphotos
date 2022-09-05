import React from 'react';
import { Layout } from '../components/layouts/Layout';
import { PhotosContainer } from '../components/containers/PhotosContainer/PhotosContainer';
import { PortfolioHeader } from '../components/elements/PortfolioHeader/PortfolioHeader';
import { Wrapper } from '../components/pages/PortfolioPage/PortfolioPage.styled';

const Portfolio = () => {
  return (
    <Layout>
      <Wrapper>
        <PortfolioHeader />
        <PhotosContainer />
      </Wrapper>
    </Layout>
  );
};

export default Portfolio;
