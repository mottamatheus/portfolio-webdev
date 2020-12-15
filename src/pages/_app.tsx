import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import Main from '../components/Main';
import Projects from '../components/Projects';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Main />
      <Projects />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
