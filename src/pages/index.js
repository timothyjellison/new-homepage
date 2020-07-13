import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import get from 'lodash/get'
import BlogPostExcerpt from '../components/BlogPostExcerpt'
import Layout from '../components/Layout'
import AboutMe from '../components/AboutMe'

export default ({ location, data }) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          limit: 5
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
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
          <AboutMe />
          <div>
            <h2>Latest Blog Posts</h2>
            <ul>
              {!!posts.length &&
                posts.map(({ node }) => (
                  <li>
                    <BlogPostExcerpt
                      url={node.fields.slug}
                      title={get(node, 'frontmatter.title') || node.fields.slug}
                      key={node.fields.slug}
                    />
                  </li>
                ))}
            </ul>
            <Link to="/blog">Read More</Link>
          </div>
        </Layout>
      )
    }}
  />
)
