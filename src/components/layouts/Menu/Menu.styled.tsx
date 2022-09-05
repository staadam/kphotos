import { Link } from 'gatsby';
import styled from 'styled-components';

interface IMenuWrapperProps {
  readonly isOpen: boolean;
}

export const MenuWrapper = styled.nav<IMenuWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zindex.menu};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 100vh;
  padding-left: 10%;

  background-color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xl};

  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: 0.3s transform ease-in-out;

  * {
    color: ${({ theme }) => theme.colors.main};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    width: auto;
    min-height: auto;
    padding-left: 0;
    font-size: ${({ theme }) => theme.fontSize.l};

    transform: translateX(0);
  }
`;

export const PageLinks = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 35px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    flex-direction: row;
    margin-top: 0px;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  padding: 5px 10px;
  margin-bottom: 20px;
  margin-left: 10px;

  border-radius: 3px;

  &::before {
    content: '';
    display: block;
    position: absolute;

    top: 100%;
    left: 0;

    width: 100%;
    height: 2px;

    background-color: ${({ theme }) => theme.colors.main};

    transform: scaleX(0);
    transition: 0.3s transform ease-out;
    transform-origin: right center;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left center;
  }

  &.active::before {
    transform: scaleX(1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-bottom: 0px;
    margin-left: 10px;
  }
`;

export const AnimatedStyledLink = styled(StyledLink)<{ delay: number }>`
  opacity: 0;
  transform: translateX(300px);
  transition: opacity 0.5s ${({ delay }) => delay + 0.1}s ease,
    transform 0.5s ${({ delay }) => delay + 0.1}s ease;

  .wrapperOpen & {
    opacity: 1;
    transform: translateX(0);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    opacity: 0;
    transform: translateX(0) translateY(-100px);
    animation: animateDesktopMenu 0.3s ${({ delay }) => delay}s 1 ease forwards;
  }

  @keyframes animateDesktopMenu {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
