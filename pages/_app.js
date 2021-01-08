import React from 'react';
import Head from 'next/head';
import '../public/css/global.css'

const Zelda = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Zelda Introduction</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Zelda;