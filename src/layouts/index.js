import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

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
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={siteTitle} />
        <div className={styles.layout}>
          <Header />
          <NavBar />
          <main className={styles.mainContent}>{children()}</main>
          <Footer />
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Template
