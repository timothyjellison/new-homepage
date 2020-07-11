import React from 'react'
import Link from 'gatsby-link'
import styles from './BlogPostExcerpt.module.css'

export default ({ url, title, date }) => (
  <Link to={url} className={styles.excerpt}>
    <h3>{title}</h3>
    <time>{date}</time>
  </Link>
)
