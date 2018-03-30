import React from 'react';
import logo from './logo.svg';
import styles from './Welcome.less';

export default function Welcome() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1 className={styles.title}>Welcome to React</h1>
      </header>
      <p className={styles.intro}>
        To get started, edit <code>src/</code> and save to reload.
      </p>
    </div>
  );
}
