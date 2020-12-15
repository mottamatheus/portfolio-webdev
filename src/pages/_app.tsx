import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import Main from '../components/Main';
import ProjectsList from '../components/ProjectsList';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Main />
      <ProjectsList />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
