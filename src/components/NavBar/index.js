import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'
import { FaHome, FaFileAlt } from 'react-icons/fa'

export default () => (
  <nav className={styles.navBar}>
    <Link to={'/'}>
      <FaHome />
    </Link>
    <Link to="/blog">
      <FaFileAlt />
    </Link>
  </nav>
)
