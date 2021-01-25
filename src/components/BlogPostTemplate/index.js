import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Layout'
import styles from './index.module.css'

export default ({
  data: {
    markdownRemark: {
      frontmatter: { date, title },
      html,
    },
  },
  location,
}) => (
  <Layout location={location}>
    <div className={styles.blogPost}>
      <h1>{title}</h1>
      <time>{date}</time>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
