import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Layout } from '../components/layouts/Layout';
import { Wrapper } from '../components/IndexPage/IndexPage.styled';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import axios from 'axios';
import { ContactForm } from '../components/ContactForm/ContactForm';

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

const IndexPage = () => {
  // const wrapperRef = useRef<HTMLDivElement>(null);
  // const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // animateHomePage(wrapperRef, bannerRef);
  }, []);

  return (
    <Layout>
      <ContactForm />
      {/* <Wrapper ref={wrapperRef}>
        <Header />
        <Banner ref={bannerRef} />
      </Wrapper> */}
    </Layout>
  );
};

export default IndexPage;
