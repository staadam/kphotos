export const showElement = (imageElements: NodeListOf<HTMLElement>, e?: Event) => {
  const imageElementsArray = Array.from(imageElements);
  const showAtPoint = 0.9;

  imageElementsArray.forEach((element) => {
    const elementRect = element.offsetTop;
    const isInView =
      elementRect <=
      (window.innerHeight * showAtPoint || document.documentElement.clientHeight * showAtPoint);

    if (isInView) {
      element.classList.add('visible');
    }
  });
};
