import React from 'react';
import styles from '../public/css/components/gallery.module.css';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.row}>
        <div className={`${styles.item} ${styles.first}`}>
          <img src="/images/gallery1.jpg" alt="" className={styles.img} />
        </div>
        <div className={`${styles.item} ${styles.second}`}>
          <img src="/images/gallery2.jpg" alt="" className={styles.img} />
        </div>
        <div className={`${styles.item} ${styles.third}`}>
          <img src="/images/gallery3.jpg" alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.item} ${styles.fourth}`}>
          <img src="/images/gallery4.jpg" alt="" className={styles.img} />
        </div>
        <div className={`${styles.item} ${styles.fifth}`}>
          <img src="/images/gallery5.jpg" alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.item} ${styles.sixth}`}>
          <img src="/images/gallery6.jpg" alt="" className={styles.img} />
        </div>
        <div className={`${styles.item} ${styles.seventh}`}>
          <img src="/images/gallery7.jpg" alt="" className={styles.img} />
        </div>
        <div className={`${styles.item} ${styles.eighth}`}>
          <img src="/images/gallery8.jpg" alt="" className={styles.img} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;