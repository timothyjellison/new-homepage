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
  </>
)
