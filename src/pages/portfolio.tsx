import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components/layouts/Layout';
import { PhotosContainer } from '../components/PhotosContainer/PhotosContainer';
import { PortfolioHeader } from '../components/PortfolioHeader/PortfolioHeader';
import bg from '../images/bg.jpg';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template-rows: 100vh 1fr;
    grid-template-columns: repeat(2, 1fr);
  }
`;

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
