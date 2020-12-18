import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Main />
      <Projects />
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
