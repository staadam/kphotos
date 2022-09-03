import gsap from 'gsap';

type TAnimateHomePage = (
  wrapperRef: React.RefObject<HTMLDivElement>,
  bannerRef: React.RefObject<HTMLDivElement>
) => void;

export const animateHomePage: TAnimateHomePage = (wrapperRef, bannerRef) => {
  const isWrapperRefSet = wrapperRef.current;
  if (!isWrapperRefSet) return;

  const wrapperElements = wrapperRef.current.children[0];
  const heroImageElement = bannerRef.current;
  const titleElement = wrapperElements.querySelector('h1');
  const descriptionElement = wrapperElements.querySelector('p');

  const tl: GSAPTimeline = gsap.timeline();
  tl.set(wrapperElements, { visibility: 'visible' });
  tl.set(heroImageElement, { visibility: 'visible' });

  tl.from(heroImageElement, { duration: 0.5, x: 200, opacity: 0 }, 'showHeader+=0.3')
    .from(titleElement, { duration: 0.5, x: -200, opacity: 0 }, 'showHeader+=0.5')
    .from(
      descriptionElement,
      {
        duration: 0.5,
        x: -200,
        opacity: 0,
      },
      'showHeader+=0.7'
    )
    .addLabel('showHeader');
};
