import React from 'react';
import Header from './header/header';

const AppLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AppLayout;