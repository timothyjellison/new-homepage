import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import './reset.css';
import './global.css';
import 'prismjs/themes/prism-tomorrow.css';
import styles from './style.module.css';

class Template extends React.PureComponent {
  render() {
    const {author, role} = get(this.props, 'data.site.siteMetadata')
    const currentYear = new Date().getFullYear();

    return (
      <div>
        <Helmet title={`${author}: ${role}`} />
        <div className={styles.layout}>

          <header className={styles.header}>
            <Link to={'/'} className={styles.link}>
              <h1 className={styles.name}>{author}</h1>
              <h2>{role}</h2>
            </Link>
          </header>

          <nav className={styles.nav}>
            <Link to="/" className={styles.link}>About</Link>
            <Link to="/blog" className={styles.link}>Blog</Link>
          </nav>

          <main className={styles.mainContent}>
            {this.props.children()}
          </main>

          <footer className={styles.footer}>
            Tim Ellison &copy; {currentYear}
          </footer>
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        author
        role
      }
    }
  }
`;

export default Template
