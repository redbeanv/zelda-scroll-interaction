import React from 'react';
import styles from '../../public/css/pages/index.module.css';

const StickySection = () => {

  return (
    <section className={styles.section1} data-scene-type='sticky'>
      <h2 className={styles.title}>The Legend of &nbsp;Zelda<br/>Breath of the Wild</h2>
      <div className={styles.sticky}>
        <canvas id="vidio-canvas-0" width="1920" height="1080" className={styles.canvas}></canvas>
      </div>
    </section>
  )
};

export default StickySection;