import React from 'react'
import styles from './index.module.css'
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa'

const LilHook = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </a>
)

export default () => (
  <>
    <div>
      <h1 className={styles.header}>
        Timothy Ellison
        <br />
        <small>Front End Web Developer</small>
      </h1>
      <div className={styles.socialIcons}>
        <LilHook href="https://github.com/timothyjellison">
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
    <p className={styles.body}>
      At <LilHook href="https://jobs.netflix.com/">Netflix</LilHook> I build web
      apps used by translators around the world to create subtitles. In all my
      work I value simplicity and utility above all else. Besides front-end web
      development my passions are poetry, jazz, and cooking.
    </p>
  </>
)
