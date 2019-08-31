import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default ({
  data: {
    markdownRemark: {
      frontmatter: {
        date,
        title
      },
      html
    }
  },
  location
}) => (
  <Layout location={location}>
    <div className="blog-post">
      <h1 className={"blog-post-excerpt__title"}>{title}</h1>
      <p className={"blog-post-excerpt__date"}>{date}</p>
      <div style={{fontSize: '1.5em'}} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </Layout>
);

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
