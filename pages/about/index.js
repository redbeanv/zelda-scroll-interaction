import React from 'react';
import Link from 'next/link';
import AppLayout from '../../components/AppLayout';
import Head from 'next';
import Header from '../../components/header/header';

const About = () => (
  <AppLayout>
    <Header />
    <h1>소개페이지</h1>
  </AppLayout>
);

export default About;