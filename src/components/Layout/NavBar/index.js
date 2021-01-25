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
    <div className="links">
      <Link
        to={'/'}
        className={cx({
          [styles.sideIcon]: true,
          [styles.sideIconActive]: pathname === '/',
        })}
      >
        <FaHome />
      </Link>
      <Link
        to="/blog"
        className={cx({
          [styles.sideIcon]: true,
          [styles.sideIconActive]:
            pathname === '/blog' || pathname.includes('/posts'),
        })}
      >
        <FaFileAlt />
      </Link>
    </div>
  </nav>
)
