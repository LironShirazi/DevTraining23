import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './day1b.module.css';

export default function Day1b() {
  return (
    <div>
      <div className={styles.navbarContainer}>
        <ul className={styles.ulContainer}>
          <li className={styles.linkContainer}>
            <Link className={styles.linkStyle} href="/day1">Day #1 </Link>
          </li>
        </ul>
      </div>
      <h1>Day 1 Bonus Challenge - Heros</h1>
      <div className={styles.heroContainer}>
        <div className={styles.imageContainer}>
          <Image fill src="/2.jpg" alt="hero image" />
        </div>
        <p className={styles.contentOfSection}>
          Welcome to Heros developer - ready for any challenge

        </p>
      </div>
    </div>
  );
}
