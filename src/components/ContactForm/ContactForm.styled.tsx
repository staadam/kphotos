import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  justify-self: center;
  flex-direction: column;
  width: 80%;
  min-width: 300px;
  margin-top: 50px;
  padding-bottom: 50px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template-columns: 1fr 45%;
    margin-top: 100px;
  }
`;

export const ReCAPTCHAPolicy = styled.div`
  width: 200px;
  font-size: 10px;
  margin-top: 10px;
  color: ${({ theme: { colors } }) => colors.main};
`;
