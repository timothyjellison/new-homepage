/*
 * Main page for my blog
 */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'
import styles from './index.module.css'

export const BlogPostExcerpt = ({ url, title, date }) => (
  <Link to={url} className={styles.excerpt}>
    <h3>{title}</h3>
    {date && <time>{date}</time>}
  </Link>
)

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
