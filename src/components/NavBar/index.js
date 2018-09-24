import React from 'react';
import Link from 'gatsby-link'
import styles from './style.module.css';

class NavBar extends React.PureComponent {
  render() {
    return (
      <nav className={styles.nav}>
        <Link to="/" className={styles.link} >About</Link>
        <Link to="/blog" className={styles.link} >Blog</Link>
      </nav>
    );
  }
};

export default NavBar;
