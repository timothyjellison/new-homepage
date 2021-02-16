import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import styles from './index.module.css'
import { FaHome, FaFileAlt } from 'react-icons/fa'

export default ({ pathname }) => (
  <nav className={styles.navBar}>
    <Link to={'/'} className={styles.homeIcon}>
      Tim Ellison
    </Link>
    <div className={styles.links}>
      <a href="https://github.com/timdotbiz/" target="_blank" rel="noreferrer noopener">
        Github
      </a>
      <a href="https://codepen.io/tlls1" target="_blank" rel="noreferrer noopener">
        CodePen
      </a>
      <a href="https://www.linkedin.com/in/timothyjellison/" target="_blank" rel="noreferrer noopener">
        LinkedIn
      </a>
    </div>
  </nav>
)
