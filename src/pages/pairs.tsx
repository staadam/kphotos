import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Layout } from '../components/layouts/Layout';
import { Wrapper } from '../components/IndexPage/IndexPage.styled';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import axios from 'axios';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { IPairsProps } from '../utils/types/pages/pairs';

type TAnimateHomePage = (
  wrapperRef: React.RefObject<HTMLDivElement>,
  bannerRef: React.RefObject<HTMLDivElement>
) => void;

const animateHomePage: TAnimateHomePage = (wrapperRef) => {
  const isWrapperRefSet = wrapperRef.current;
  if (!isWrapperRefSet) return;

  const wrapperElements = wrapperRef.current.children[0];

  const tl: GSAPTimeline = gsap.timeline();
  tl.set(wrapperElements, { visibility: 'visible' });
};

const Pairs = ({ data }: IPairsProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  console.log(data);
  // useEffect(() => {
  //   animateHomePage(wrapperRef);
  // }, []);
  return (
    <Layout>
      <Wrapper ref={wrapperRef}>
        <Header />
        {data.allDatoCmsPair.nodes.map((node: any) => (
          <GatsbyImage image={node.previewPhoto.gatsbyImageData} alt='meh' />
        ))}
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    allDatoCmsPair {
      nodes {
        previewPhoto {
          gatsbyImageData
        }
      }
    }
  }
`;

export default Pairs;
