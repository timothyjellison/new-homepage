import React from 'react'
import Helmet from 'react-helmet'
import styles from './index.module.css'
import NavBar from '../NavBar'

class Layout extends React.PureComponent {
  componentDidMount() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }

  render() {
    return (
      <>
        <Helmet title="Tim Ellison: Software Engineer">
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Helmet>
        <div>
          <header className={`${styles.grid} ${styles.header}`}>
            <NavBar pathname={this.props.location.pathname} />
          </header>
          <main className={styles.grid}>{this.props.children}</main>
          <footer className={styles.grid}>
            <p className={styles.copyright}>&copy; 2018 Tim Ellison</p>
          </footer>
        </div>
      </>
    )
  }
}

export default Layout
