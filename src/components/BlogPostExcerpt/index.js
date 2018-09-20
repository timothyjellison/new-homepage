import React from 'react';
import Link from 'gatsby-link'
import styles from './style.module.css';

export default (props) => {
  return (
    <div>
      <Link to={props.url} className={styles.container}>
        <h3 className={styles.title}>
            {props.title}
        </h3>
        <small className={styles.date}>{props.date}</small>
      </Link>
    </div>
  );
}
