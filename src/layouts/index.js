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
        <main style={{
          backgroundColor: 'white',
          padding: '3em'
        }}>{children()}</main>
        <Footer />
      </div>
    )
  }
}

export default Template
