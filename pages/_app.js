import React from 'react';
import Head from 'next/head';

const Zelda = ({Component}) => {
  return (
    <>
      <Head>
        <title>Zelda Introduction</title>
        <link rel={'stylesheet'} href={'css/style.css'}></link>
      </Head>
      <Component/>
    </>
  );
};

export default Zelda;