import React from 'react'
import styles from './AboutMe.module.css'

const LilHook = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </a>
)

export default () => (
  <div>
    <img
      className={styles.profilePic}
      src="https://res.cloudinary.com/dzwa7qhj1/image/upload/v1594437891/F2674310-D153-4729-A80D-C2C80ECE7117.jpg"
    />
    <p>
      Hi 👋 I'm Tim Ellison. I'm a UI engineer at{' '}
      <LilHook href="https://jobs.netflix.com/">Netflix</LilHook>. Here are some
      things I'm passionate about:
    </p>
    <p>
      * Literature & Languages. I studied Greek, Latin, Italian, and English
      literature at Fresno State and Yale, and then spent a chunk of my life
      futilely attempting to make a living from editing manuscripts, managing
      print schedules, and writing poetry criticism. I'm a voracious reader,
      mostly preferring poetry and fiction.
    </p>
    <p>
      * User interface engineering. I get a lot of joy and pride out of creating
      efficient and intuitive interactions between people and computers. I wrote
      my first computer programs when I was twelve (QBasic -> Klik N Play ->
      Visual Basic). I still feel that thrill of turning the pseudo-language of
      code into the pseudo-experience of interacting with a computer; it really
      is pure magic.
    </p>
    <p>
      At Netflix, I'm part of the Globalization Tech team that provides tools
      used by translators around the world to create Netflix's subtitles and
      voice overdubs. I'm very fortunate to get to put both my passions to work
      every day as I strive to expand and improve a product that I love.{' '}
    </p>
  </div>
)
