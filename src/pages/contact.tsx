import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import gsap from 'gsap';

import { IContactProps } from '../utils/types/pages/contact';

import { Layout } from '../components/layouts/Layout';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Banner } from '../components/Banner/Banner';
import { Wrapper } from '../components/ContactPage/ContactPage.styled';

type TanimateContactPage = (wrapperRef: React.RefObject<HTMLDivElement>) => void;

const animateContactPage: TanimateContactPage = (wrapperRef) => {
  const isWrapperRefSet = wrapperRef.current;
  if (!isWrapperRefSet) return;

  const formElement = wrapperRef.current.children[0];
  const bannerElement = wrapperRef.current.children[1];

  const formChildren = formElement.childNodes;

  const tl: GSAPTimeline = gsap.timeline();
  tl.set(bannerElement, { visibility: 'visible' });
  tl.set(formChildren, { visibility: 'visible' });

  tl.from(bannerElement, { duration: 0.5, x: 200, opacity: 0, delay: 0.2 });

  formChildren.forEach((child, idx) => {
    tl.from(child, { duration: 0.3, x: -200, opacity: 0, delay: idx / 5 }, 'showFormElements-=0.3');
  });

  tl.addLabel('showFormElements');
};

const Contact = ({ data }: IContactProps) => {
  const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    animateContactPage(wrapperRef);
  });

  return (
    <Layout>
      <Wrapper ref={wrapperRef}>
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
