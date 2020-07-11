import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

const LilHook = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </a>
)

export default () => (
  <nav className={styles.navBar}>
    <div>
      <Link to={'/'}>Timothy Ellison</Link>
    </div>
    <div className={styles.externalLinks}>
      <LilHook href="https://github.com/timothyjellison">Github</LilHook>
      <LilHook href="https://www.linkedin.com/in/timothyjellison/">
        LinkedIn
      </LilHook>
    </div>
  </nav>
)
