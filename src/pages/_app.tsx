import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import Main from '../components/Main';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Main />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
