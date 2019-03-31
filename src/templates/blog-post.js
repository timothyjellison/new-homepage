import React from 'react'
import styles from '../components/BlogPostExcerpt/style.module.css';
import PageTransition from 'gatsby-plugin-page-transitions';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    return (
      <PageTransition>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <p className={styles.date}>{post.frontmatter.date}</p>
        <div style={{fontSize: '1.5em'}} dangerouslySetInnerHTML={{ __html: post.html }} />
      </PageTransition>
    )
  }
}

export default BlogPostTemplate

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
