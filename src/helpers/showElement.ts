export const showElement = (imageElements: NodeListOf<HTMLDivElement>) => {
  const viewPoint = window.scrollY + window.innerHeight * 0.9;
  imageElements.forEach((photo) => {
    const isPhotoOverViewPoint = viewPoint >= photo.offsetTop;
    if (isPhotoOverViewPoint) photo.classList.add('visible');
  });
};
