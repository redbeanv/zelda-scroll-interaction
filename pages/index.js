import React from 'react';
import AppLayout from '../components/AppLayout';
import Header from '../components/header/header';

const Main = () => (
  <AppLayout>
    <Header />
    <h2>The Legend of &nbsp;Zelda<br />Breath of the Wild</h2>
    <div id='background'></div>
  </AppLayout>
);

export default Main;