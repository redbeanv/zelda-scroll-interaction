import React from 'react';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';

const Main = () => (
  <AppLayout>
    <h1>The Legend of Zelda</h1>
    <h2>Breath of the Wild</h2>
    <div id='background'></div>
    <button>
      <Link href='/about'>
        <a>제작자들</a>
      </Link>
    </button>
  </AppLayout>
);

export default Main;