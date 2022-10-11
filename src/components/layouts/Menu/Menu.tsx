import React, { useState } from 'react';
import { HamburgerButton } from '../../elements/buttons/HamburgerButton/HamburgerButton';
import { Logo } from '../../elements/Logo/Logo';
import { MenuWrapper, PageLinks, AnimatedStyledLink } from './Menu.styled';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => setIsOpen(false);
  const handleToggle = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <MenuWrapper isOpen={isOpen} className={isOpen ? 'wrapperOpen' : ''}>
        <Logo />
        <PageLinks>
          <AnimatedStyledLink delay={0} to='/portfolio' onClick={handleCloseMenu} activeClassName='active'>
            Portfolio
          </AnimatedStyledLink>
          <AnimatedStyledLink delay={0.1} to='/pairs' onClick={handleCloseMenu} activeClassName='active'>
            Galeria par
          </AnimatedStyledLink>
          <AnimatedStyledLink delay={0.2} to='/contact' onClick={handleCloseMenu} activeClassName='active'>
            Kontakt
          </AnimatedStyledLink>
        </PageLinks>
      </MenuWrapper>
      <HamburgerButton isOpen={isOpen} handleToggle={handleToggle} />
    </>
  );
};
