import gsap from 'gsap';

type TAnimatePairPage = (wrapperRef: React.RefObject<HTMLDivElement>) => void;

export const animatePairs: TAnimatePairPage = (wrapperRef) => {
  const isWrapperRefSet = wrapperRef.current;
  if (!isWrapperRefSet) return;

  const wrapperElements = Array.from(wrapperRef.current.children);
  const tl: GSAPTimeline = gsap.timeline();

  tl.set(wrapperElements, { visibility: 'visible' });

  wrapperElements.forEach((pairElement, idx) => {
    tl.from(pairElement, { y: 100, opacity: 0, duration: 0.5, delay: idx / 5 }, 'showPairElements+=0.3');
  });

  tl.addLabel('showPairElements');
};
