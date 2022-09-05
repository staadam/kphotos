import gsap from 'gsap';

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
