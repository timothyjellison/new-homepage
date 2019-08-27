import React from 'react'
import get from 'lodash/get'
import BlogPostExcerpt from '../../components/BlogPostExcerpt';
import PageTransition from 'gatsby-plugin-page-transitions';

class BlogIndex extends React.PureComponent {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className="blog-page">
        {posts.map(({ node }) =>
          <BlogPostExcerpt
            url={node.fields.slug}
            title={get(node, 'frontmatter.title') || node.fields.slug}
            date={node.frontmatter.date}
            key={node.fields.slug}
          />
        )}

        {/* hardcoding in this one exception to the default blog flow */}
        <BlogPostExcerpt
          url={"/posts/bokeh-backgrounds-with-css-doodle/"}
          title={"Bokeh Backgrounds With CSS Doodle"}
          date={"05/27/18"}
        />
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM/DD/YY")
            title
          }
        }
      }
    }
  }
`
