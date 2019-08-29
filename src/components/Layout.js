import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import '../layouts/reset.css';
import '../layouts/global.css';
import 'prismjs/themes/prism-tomorrow.css';
import styles from '../layouts/style.module.css';

class Layout extends React.PureComponent {
  render() {
    const {pathname} = get(this.props, 'location');
    const currentYear = new Date().getFullYear();

    return (
      <div>
        <Helmet title="Tim Ellison: User Interface Engineer" />
        <div className={styles.layout}>

          <header className={styles.header}>
            <Link to={'/'} className={styles.link}>
              <h1 className={styles.name}>Tim Ellison</h1>
              <h2>User Interface Engineer</h2>
            </Link>
          </header>

          <nav className={styles.nav}>
            <Link to="/" className={pathname === '/' ? styles.linkSelected : styles.link}>Home</Link>
            <Link to="/articles" className={(pathname.includes('posts') || pathname.includes('/articles'))  ? styles.linkSelected : styles.link}>Articles</Link>
            <Link to="/reading" className={pathname === '/reading' ? styles.linkSelected : styles.link}>Reading</Link>
            {/* <Link to="/music" className={pathname === '/music' ? styles.linkSelected : styles.link}>Music</Link> */}
          </nav>

          <main className={styles.mainContent}>
            {this.props.children}
          </main>

          <footer className={styles.footer}>
            Tim Ellison &copy; {currentYear}
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
