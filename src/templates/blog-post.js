import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styles from '../components/BlogPostExcerpt/style.module.css';
import Layout from '../components/Layout';

export default (props) => {
  const post = props.data.markdownRemark;

  return (
    <Layout location={props.location}>
      <div>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <p className={styles.date}>{post.frontmatter.date}</p>
        <div style={{fontSize: '1.5em'}} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

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
