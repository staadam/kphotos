import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

interface IHamburgerButtonProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const StyledButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;

  margin: 30px;

  width: 50px;

  background-color: transparent;
  border: none;
  cursor: pointer;

  p {
    width: 100%;
    height: 2px;
    margin-bottom: 8px;
    background-color: ${({ theme }) => theme.colors.main};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    display: none;
  }
`;

const animateOpenMenu = (buttonRef: React.RefObject<HTMLButtonElement>) => {
  const buttonElements = buttonRef.current;
  if (!buttonElements) return;

  const line1 = buttonElements?.querySelector('p:nth-child(1)');
  const line2 = buttonElements?.querySelector('p:nth-child(2)');
  const line3 = buttonElements?.querySelector('p:nth-child(3)');

  const tl: GSAPTimeline = gsap.timeline();
  tl.set(buttonElements, { visibility: 'visible' });

  tl.to(buttonElements, { duration: 0, disabled: true }, 'squeeze')
    .to(line1, { duration: 0.2, y: 10 }, 'squeeze')
    .to(line3, { duration: 0.2, y: -10 }, 'squeeze')
    .addLabel('squeeze')
    .to(line2, { duration: 0, opacity: 0 }, 'hideMiddleLine')
    .addLabel('hideMiddleLine')
    .to(line1, { duration: 0.2, rotate: 45 }, 'rotate')
    .to(line3, { duration: 0.2, rotate: -45 }, 'rotate')
    .to(buttonElements, { duration: 0, disabled: false }, 'rotate')
    .addLabel('rotate');
};

const animateCloseMenu = (buttonRef: React.RefObject<HTMLButtonElement>) => {
  const buttonElements = buttonRef.current;
  if (!buttonElements) return;

  const line1 = buttonElements?.querySelector('p:nth-child(1)');
  const line2 = buttonElements?.querySelector('p:nth-child(2)');
  const line3 = buttonElements?.querySelector('p:nth-child(3)');

  const tl: GSAPTimeline = gsap.timeline();
  tl.set(buttonElements, { visibility: 'visible' });

  tl.to(buttonElements, { duration: 0, disabled: true }, 'rotate')
    .to(line1, { duration: 0.2, rotate: 0 }, 'rotate')
    .to(line3, { duration: 0.2, rotate: 0 }, 'rotate')
    .addLabel('rotate')
    .to(line2, { duration: 0, opacity: 1 }, 'showMiddleLine')
    .addLabel('showMiddleLine')
    .to(line1, { duration: 0.2, y: 0 }, 'unsqueeze')
    .to(line3, { duration: 0.2, y: 0 }, 'unsqueeze')
    .to(buttonElements, { duration: 0, disabled: false }, 'unsqueeze')
    .addLabel('unsqueeze');
};

export const HamburgerButton = ({ isOpen, handleToggle }: IHamburgerButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      animateOpenMenu(buttonRef);
    } else {
      animateCloseMenu(buttonRef);
    }
  }, [isOpen]);

  return (
    <StyledButton ref={buttonRef} onClick={handleToggle}>
      <p></p>
      <p></p>
      <p></p>
    </StyledButton>
  );
};
