/*
 * This is the main layout wrapper for the whole site. Every page in /pages should be wrapped in this.
 */
import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import styles from './index.module.css'
import NavBar from './NavBar'

const Layout = ({ location: { pathname }, children }) => {
  /*
   * Sign users into the Netlify CMS admin page
   */
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }, [])

  return (
    <>
      <Helmet title="Tim Ellison: Software Engineer">
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <div>
        <header className={`${styles.grid} ${styles.header}`}>
          <NavBar pathname={pathname} />
        </header>
        <main className={styles.grid}>{children}</main>
        <footer className={styles.grid}>
          <p className={styles.copyright}>&copy; 2018 Tim Ellison</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
