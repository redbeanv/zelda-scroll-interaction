import React from 'react';
import Header from './layout/header';

const AppLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AppLayout;