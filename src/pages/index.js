/*
 * This is the home page, where you land when you reach timellison.dev
 */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa'
import { BlogPostExcerpt } from './blog'
import Layout from '../components/Layout'
import styles from './index.module.css'

const LilHook = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </a>
)

export default ({ location }) => (
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
          <h2>
            Hi, I'm Tim 👋 I'm a software engineer specializing in web applications
          </h2>
          <p className={styles.body}>
            At <LilHook href="https://jobs.netflix.com/">Netflix</LilHook> I build
            tools used by translators around the world to create subtitles. In my work
            I value utility, simplicity, and clarity above all else. Besides software
            my passions are reading literature and philosophy, playing and listening
            to music, and cooking.
          </p>
          <div>
            <div className={styles.socialIcons}>
              <LilHook href="https://github.com/timdotbiz">
                <FaGithub />
              </LilHook>
              <LilHook href="https://www.linkedin.com/in/timothyjellison/">
                <FaLinkedinIn />
              </LilHook>
              <LilHook href="https://codepen.io/tlls1">
                <FaCodepen />
              </LilHook>
            </div>
          </div>
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
