import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

export default ({ url, title, date, subtitle }) => (
  <Link to={url} className={styles.excerpt}>
    <h3>{title}</h3>
    {date && <time>{date}</time>}
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </Link>
)
