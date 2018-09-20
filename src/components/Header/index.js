import React from 'react';
import Link from 'gatsby-link'
import styles from './style.module.css';

export default () => {
  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.link}>
        <h1 className={styles.name}>
          TIM ELLISON
        </h1>
        <h2>
          FRONT-END WEB DEVELOPER
        </h2>
      </Link>
    </header>
  );
};
