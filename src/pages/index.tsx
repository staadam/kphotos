import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';

import { animateHomePage } from '../utils/animations/pages';
import { IIndexProps } from '../utils/types/pages';

import { Layout } from '../components/layouts/Layout';
import { Wrapper } from '../components/IndexPage/IndexPage.styled';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';

const IndexPage = ({ data }: IIndexProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateHomePage(wrapperRef, bannerRef);
  }, []);

  return (
    <Layout>
      <Wrapper ref={wrapperRef}>
        <Header />
        <Banner ref={bannerRef} image={data.file.childImageSharp.gatsbyImageData} alt={'Photographer'} />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "photographer.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }
  }
`;

export default IndexPage;
