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
    const {author, role} = get(this, 'props.data.site.siteMetadata')

    return (
      <div>
        <Helmet title={`${author}: ${role}`} />
        <div className={styles.layout}>
          <Header author={author} role={role}/>
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
        author
        role
      }
    }
  }
`;

export default Template
