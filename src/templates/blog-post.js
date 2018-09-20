import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import styles from '../components/BlogPostExcerpt/style.module.css';
import BlogPostNav from '../components/BlogPostNav';


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <p className={styles.date}>{post.frontmatter.date}</p>

        <div style={{fontSize: '1.5em'}} dangerouslySetInnerHTML={{ __html: post.html }} />

        {/* <BlogPostNav
          prevTitle={previous && previous.frontmatter.title}
          prevURL={previous && previous.fields.slug}
          nextTitle={next && next.frontmatter.title}
          nextURL={next && next.fields.slug}
        /> */}
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
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
