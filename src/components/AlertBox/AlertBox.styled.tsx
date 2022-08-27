import styled, { keyframes } from 'styled-components';
import { config } from '../../utils/constants/alert';

export const AlertWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zindex.alert};

  width: 350px;
`;

const timeBar = keyframes`
  from{
    transform: scaleX(1);
  }

  to{
    transform: scaleX(0);
  }
`;

export const Alert = styled.div`
  position: relative;

  padding: 13px 18px 26px;
  margin: 15px;
  border-radius: 5px;
  line-height: 1.2em;

  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 10px -5px ${({ theme }) => theme.colors.black};

  &::before {
    content: '';
    position: absolute;
    left: 15px;
    bottom: 13px;

    width: calc(100% - 30px);
    height: 2px;

    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.lightMain};

    transform-origin: left center;
    animation: ${timeBar} ${config.alertTime / 1000}s linear both;
  }
`;
