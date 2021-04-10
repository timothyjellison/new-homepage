import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Layout'

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
    <h1>{title}</h1>
    <time>{date}</time>
    <article dangerouslySetInnerHTML={{ __html: html }} />
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
