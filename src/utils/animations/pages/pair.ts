import gsap from 'gsap';

type TAnimatePair = (
  wrapperRef: React.RefObject<HTMLDivElement>,
  bannerRef: React.RefObject<HTMLDivElement>
) => void;

export const animatePair: TAnimatePair = (wrapperRef) => {
  const isWrapperRefSet = wrapperRef.current;
  if (!isWrapperRefSet) return;

  const pairOverview = wrapperRef.current.children[0];
  const [titleElement, descriptionElements] = Array.from(pairOverview.children) as [
    HTMLHeadingElement,
    HTMLDivElement
  ];

  const titleArrayReverse = Array.from(titleElement.childNodes).reverse();

  const tl: GSAPTimeline = gsap.timeline();
  tl.set(pairOverview, { visibility: 'visible' });

  titleArrayReverse.forEach((letter: any, idx) => {
    tl.from(letter, { duration: 0.1, x: -100, opacity: 0, delay: idx / 20 }, 'showTitleElements+=0.3');
  });
  tl.addLabel('showTitleElements');

  descriptionElements.childNodes.forEach((descriptionElement: any, idx) => {
    const isFirstElement = idx === 0;
    const elementFadeDirection = isFirstElement ? 100 : -100;

    tl.from(
      descriptionElement,
      { duration: 0.4, x: elementFadeDirection, opacity: 0, delay: idx / 5 },
      'showTitleElements+=0.3'
    );
  });

  // tl.from(heroImageElement, { duration: 0.5, x: 200, opacity: 0 }, 'showHeader+=0.3')
  //   .from(titleElement, { duration: 0.5, x: -200, opacity: 0 }, 'showHeader+=0.5')
  //   .from(
  //     descriptionElement,
  //     {
  //       duration: 0.5,
  //       x: -200,
  //       opacity: 0,
  //     },
  //     'showHeader+=0.7'
  //   )
  //   .addLabel('showHeader');
};
