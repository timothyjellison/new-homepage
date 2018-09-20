import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import BlogPostExcerpt from '../../components/BlogPostExcerpt';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className="blog-page">
        <Helmet title={siteTitle} />
        {posts.map(({ node }) =>
          <BlogPostExcerpt
            url={node.fields.slug}
            title={get(node, 'frontmatter.title') || node.fields.slug}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        )}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
