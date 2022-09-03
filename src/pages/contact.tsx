import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';

import { IContactProps } from '../utils/types/pages/contact';
import { animateContactPage } from '../utils/animations/pages/contact';

import { Layout } from '../components/layouts/Layout';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Banner } from '../components/Banner/Banner';
import { Wrapper } from '../components/ContactPage/ContactPage.styled';

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
