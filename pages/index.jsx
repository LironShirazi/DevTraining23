import React from 'react';
import styles from './index.module.css';
import TableOfContent from '../components/TableOfContent';

export default function Index() {
  const days = [
    'Day 1 - Responsive design and Flexbox',
    'Day 2: Introduction to React.js, State Management, and Hooks',
  ];
  return (
    <div className={styles.container}>
      <h1>Dev&apos;s Team 2023 Basic Training - Liron</h1>
      <h2>
        We&apos;re learning how to build a full-stack web application with Eyal
      </h2>
      <TableOfContent days={days} />
    </div>
  );
}
