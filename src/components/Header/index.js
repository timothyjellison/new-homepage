import React from 'react';
import Link from 'gatsby-link'
import styles from './style.module.css';

export default (props) => {
  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.link}>
        <h1 className={styles.name}>{props.author}</h1>
        <h2>{props.role}</h2>
      </Link>
    </header>
  );
};
