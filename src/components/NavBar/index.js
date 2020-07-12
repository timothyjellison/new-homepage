import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

export default () => (
  <nav className={styles.navBar}>
    <div>
      <Link to={'/'}>Home</Link>
    </div>
  </nav>
)
