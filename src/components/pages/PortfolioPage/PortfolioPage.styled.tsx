import bg from '../../../assets/images/bg.jpg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  visibility: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template-rows: 100vh 1fr;
    grid-template-columns: repeat(2, 1fr);
  }
`;
