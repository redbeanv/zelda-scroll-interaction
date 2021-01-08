import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header} data-type={props.isAbout && 'about'}>
      <h1 className={styles.logo}>Zelda</h1>
      <div className={styles.buttons}>
        <Link href='/'>
          <a className={styles.link}>Main</a>
        </Link>
        <Link href='/about'>
          <a className={styles.link}>About</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
