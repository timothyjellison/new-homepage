import React from 'react'
import Link from 'gatsby-link'

export default ({ pathname }) => (
  <nav className="flex flex-grow justify-between p-3">
    <Link to={'/'} className="text-5xl shadow-none self-center">
      Tim Ellison
    </Link>
    <div className="flex flex-col">
      <a className="shadow-none"href="https://github.com/timdotbiz/" target="_blank" rel="noreferrer noopener">
        Github
      </a>
      <a className="shadow-none"href="https://codepen.io/tlls1" target="_blank" rel="noreferrer noopener">
        CodePen
      </a>
      <a className="shadow-none"href="https://www.linkedin.com/in/timothyjellison/" target="_blank" rel="noreferrer noopener">
        LinkedIn
      </a>
    </div>
  </nav>
)
