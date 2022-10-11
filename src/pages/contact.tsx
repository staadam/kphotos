import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';

import { IContactProps } from '../utils/types/pages/contact';
import { animateContactPage } from '../utils/animations/pages/contact';

import { Layout } from '../components/layouts/Layout';
import { ContactForm } from '../components/form/ContactForm/ContactForm';
import { Banner } from '../components/elements/Banner/Banner';
import { Wrapper } from '../components/pages/ContactPage/ContactPage.styled';

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

export const Head = () => (
  <>
    <title>Kontakt *work title*</title>
    <meta name='description' content='Best photographer in Poland' />
    <meta property='og:title' content='Kontakt *work title*' />
    <meta property='og:description' content='Best photographer in Poland' />
  </>
);

export default Contact;
