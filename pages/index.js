import React from 'react';
import AppLayout from '../components/AppLayout';
import Gallery from '../components/gallery/gallery';
import Header from '../components/header/header';
import styles from './index.module.css';

const Main = () => (
  <AppLayout>
    <Header />
    <section className={styles.section1}>
      <h2 className={styles.title}>The Lehgend of &nbsp;Zelda<br />Breath of the Wild</h2>
      <img src="/images/video/intro/zelda 001.jpg" alt="" />
    </section>
    <section className={styles.section2}>
      <p className={styles.desc}>
        <strong className={styles.point}>Lorem</strong> ipsum dolor sit amet, <br />consectetur adipiscing elit. <br />Sed pellentesque eros magna, <br />ac ultrices nulla accumsan in. 
      </p>
      <Gallery />
    </section>
    <section className={styles.section3}>
      <h2 className={styles.title}>Calamity Ganon</h2>
      <img src="/images/video/intro/zelda 001.jpg" alt="" />
    </section>
    <section className={styles.section3}>
      <h2 className={styles.title}>Color Change</h2>
    </section>
    <section className={styles.section3}>
      <h2 className={styles.title}>Ending</h2>
      <img src="/images/video/intro/zelda 001.jpg" alt="" />
    </section>
  </AppLayout>
);

export default Main;