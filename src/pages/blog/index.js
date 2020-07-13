import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import BlogPostExcerpt from '../../components/BlogPostExcerpt'
import Layout from '../../components/Layout'

export default ({ location, data }) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                subtitle
              }
            }
          }
        }
      }
    `}
    render={data => {
      const posts = get(data, 'allMarkdownRemark.edges') || []

      return (
        <Layout location={location}>
          <h1>Blog</h1>
          <div className="blog-page">
            {!!posts.length &&
              posts.map(({ node }) => (
                <BlogPostExcerpt
                  url={node.fields.slug}
                  title={get(node, 'frontmatter.title') || node.fields.slug}
                  date={node.frontmatter.date}
                  key={node.fields.slug}
                  subtitle={node.frontmatter.subtitle}
                />
              ))}

            {/* hardcoding in this one exception to the default blog flow */}
            <BlogPostExcerpt
              url={'/posts/bokeh-backgrounds-with-css-doodle/'}
              title={'Bokeh Backgrounds With CSS Doodle'}
              date={'May 27, 2018'}
              subtitle="A short tutorial using web components"
            />
          </div>
        </Layout>
      )
    }}
  />
)
