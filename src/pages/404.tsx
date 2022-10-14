import React from 'react';
import { Description } from '../components/elements/Header/Header.styled';
import { Title } from '../components/elements/Title/Title.styled';

import { Layout } from '../components/layouts/Layout';
import { Wrapper } from '../components/pages/404/404.styled';

const ErrorPage = () => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <Title>404</Title>
          <Description>Dana strona nie istnieje</Description>
        </div>
      </Wrapper>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Nie znaleziono strony *work title*</title>
    <meta name='description' content='Best photographer in Poland' />
    <meta property='og:title' content='Kontakt *work title*' />
    <meta property='og:description' content='Best photographer in Poland' />
  </>
);

export default ErrorPage;
