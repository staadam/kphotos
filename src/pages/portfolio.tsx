import React from 'react';
import { Layout } from '../components/layouts/Layout';
import { PhotosContainer } from '../components/PhotosContainer/PhotosContainer';
import { PortfolioHeader } from '../components/PortfolioHeader/PortfolioHeader';
import { Wrapper } from '../components/PortfolioPage/PortfolioPage.styled';

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
