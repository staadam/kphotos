import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../assets/GlobalStyles.styled';
import { theme } from '../../assets/theme';
import { AlertProvider } from '../../utils/hooks/useAlert/alertProvider';
import { AlertBox } from '../elements/AlertBox/AlertBox';
import { Menu } from './Menu/Menu';

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
        <AlertProvider>
          <GlobalWrapper>
            <Menu />
            {children}
            <AlertBox />
          </GlobalWrapper>
        </AlertProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};
