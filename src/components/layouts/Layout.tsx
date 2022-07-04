import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../assets/GlobalStyles.styled';
import { theme } from '../../assets/theme';
import { Menu } from '../Menu/Menu';

interface ILayoutProps {
  children: React.ReactNode;
}

const GlobalWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme.light}>
        <GlobalStyle />
        <GlobalWrapper>
          <Menu />
          {children}
        </GlobalWrapper>
      </ThemeProvider>
    </React.Fragment>
  );
};
