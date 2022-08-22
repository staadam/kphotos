import React from 'react';
import { graphql } from 'gatsby';

import { IContactProps } from '../utils/types/pages/contact';

import { Layout } from '../components/layouts/Layout';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Banner } from '../components/Banner/Banner';
import { Wrapper } from '../components/ContactPage/ContactPage.styled';

type TAnimateHomePage = (
  wrapperRef: React.RefObject<HTMLDivElement>,
  bannerRef: React.RefObject<HTMLDivElement>
) => void;

const animateHomePage: TAnimateHomePage = (wrapperRef, bannerRef) => {
  // const isWrapperRefSet = wrapperRef.current;
  // if (!isWrapperRefSet) return;
  // const wrapperElements = wrapperRef.current.children[0];
  // const heroImageElement = bannerRef.current;
  // const titleElement = wrapperElements.querySelector('h1');
  // const descriptionElement = wrapperElements.querySelector('p');
  // const tl: GSAPTimeline = gsap.timeline();
  // tl.set(wrapperElements, { visibility: 'visible' });
  // tl.set(heroImageElement, { visibility: 'visible' });
  // tl.from(heroImageElement, { duration: 0.5, x: 200, opacity: 0 })
  //   .from(titleElement, { duration: 0.5, x: -200, opacity: 0 }, 'showHeader')
  //   .from(
  //     descriptionElement,
  //     {
  //       duration: 0.5,
  //       x: -200,
  //       opacity: 0,
  //     },
  //     'showHeader+=0.2'
  //   )
  //   .addLabel('showHeader');
};

const Contact = ({ data }: IContactProps) => {
  return (
    <Layout>
      <Wrapper>
        <ContactForm />
        <Banner image={data.file.childImageSharp.gatsbyImageData} alt={':D'} />
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

export default Contact;
