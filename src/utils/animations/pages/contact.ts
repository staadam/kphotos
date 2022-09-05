import gsap from 'gsap';

type TAnimateContactPage = (wrapperRef: React.RefObject<HTMLDivElement>) => void;

export const animateContactPage: TAnimateContactPage = (wrapperRef) => {
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
