import React from 'react';
import Link from 'next/link';
import styles from '../../public/css/components/layout/header.module.css';
import {useRouter} from "next/router";

const Header = (props) => {
  const router = useRouter();

  return (
    <header className={styles.header} data-type={router.pathname ==='/profile' && 'about'}>
      <h1 className={styles.logo}>Zelda</h1>
      <div className={styles.buttons}>
        <Link href='/'>
          <a className={styles.link}>Main</a>
        </Link>
        <Link href='/profile'>
          <a className={styles.link}>About</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
