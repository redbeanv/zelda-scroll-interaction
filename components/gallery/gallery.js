import React from 'react';
import styles from './gallery.module.css';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.row}>
        <div className={styles.item}>
          <img src="https://placeimg.com/300/480/animals" alt="" className={styles.img} />
        </div>
        <div className={styles.item}>
          <img src="https://placeimg.com/300/320/arch" alt="" className={styles.img} />
        </div>
        <div className={styles.item}>
          <img src="https://placeimg.com/300/400/nature" alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.item}>
          <img src="https://placeimg.com/400/250/people" alt="" className={styles.img} />
        </div>
        <div className={styles.item}>
          <img src="https://placeimg.com/300/280/tech" alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.item}>
          <img src="https://placeimg.com/400/320/animals" alt="" className={styles.img} />
        </div>
        <div className={styles.item}>
          <img src="https://placeimg.com/240/350/any" alt="" className={styles.img} />
        </div>
        <div className={styles.item}>
          <img src="https://placeimg.com/280/400/nature" alt="" className={styles.img} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;