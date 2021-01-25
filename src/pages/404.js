/*
 * Generic 404 page
 */
import React from 'react'
import Layout from '../components/Layout'

export default ({ location }) => (
  <Layout location={location}>
    <h1>Page not found</h1>
    <p>Head back <a href="/">home</a> or check out my <a href="./blog">blog</a></p>
  </Layout>
)
