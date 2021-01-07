import React from 'react';
import Link from 'next/link';
import AppLayout from '../../components/AppLayout';
import Head from 'next';

const About = () => (
  <AppLayout>
    <h1>소개페이지</h1>
    {/* className 추가시 <Link>가 아닌 <a>링크에 해야함 */}
    <Link href='/'>
      <a>뒤로가기</a>
    </Link>
  </AppLayout>
);

export default About;