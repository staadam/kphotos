import gsap from 'gsap';

type TAnimatePortfolioPage = (wrapperRef: React.RefObject<HTMLDivElement>) => void;

export const animatePortfolioPage: TAnimatePortfolioPage = (wrapperRef) => {
  const isWrapperRefSet = wrapperRef.current;
  if (!isWrapperRefSet) return;

  const photosContainer = wrapperRef.current.children[1];
  const [title, paragraph] = Array.from(wrapperRef.current.children[0].childNodes) as [
    HTMLHeadingElement,
    HTMLParagraphElement
  ];

  const tl: GSAPTimeline = gsap.timeline();
  tl.set(wrapperRef.current, { visibility: 'visible' });

  title.childNodes.forEach((letter: any, idx) => {
    console.log(letter);
    tl.from(letter, { duration: 0.1, x: 100, opacity: 0, delay: idx / 15 }, 'showHeaderElements+=0.3');
  });
  tl.addLabel('showHeaderElements');

  tl.from(paragraph, { duration: 0.3, x: 100, opacity: 0 }, 'showRest');
  tl.from(photosContainer, { duration: 0.5, y: 200, opacity: 0, delay: 0.2 }, 'showRest');

  tl.addLabel('showRest');
};
