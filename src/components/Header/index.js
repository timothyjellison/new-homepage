import React from 'react';
import Link from 'gatsby-link'
import styles from './style.module.css';

class Header extends React.PureComponent {
  render() {
    return (
      <header className={styles.header}>
        <Link to={'/'} className={styles.link}>
          <h1 className={styles.name}>{this.props.author}</h1>
          <h2>{this.props.role}</h2>
        </Link>
      </header>
    );
  }
};

export default Header;
