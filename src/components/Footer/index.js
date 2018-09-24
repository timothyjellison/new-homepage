import React from 'react';
import styles from "./style.module.css"

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className={styles.footer}>
        Tim Ellison &copy; 2018
      </footer>
    );
  }
};

export default Footer;
