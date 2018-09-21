import React from 'react'
import './reset.css';
import './global.css';
import 'prismjs/themes/prism-tomorrow.css';
import styles from './style.module.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className={styles.layout}>
        <Header />
        <NavBar />
        <main className={styles.mainContent}>{children()}</main>
        <Footer />
      </div>
    )
  }
}

export default Template
