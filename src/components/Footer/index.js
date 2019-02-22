import React from 'react';
import styles from "./style.module.css"

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className={styles.footer}>
        Tim Ellison &copy; 2019
      </footer>
    );
  }
};

export default Footer;
