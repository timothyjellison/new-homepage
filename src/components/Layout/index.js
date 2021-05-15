/*
 * This is the main layout wrapper for the whole site. Every page in /pages should be wrapped in this.
 */
import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import NavBar from './NavBar'

const Layout = ({ location: { pathname }, children }) => {
  /*
   * Sign users into the Netlify CMS admin page
   */
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }, [])

  return (
    <>
      <Helmet title="Tim Ellison: Software Engineer">
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <div className="container mx-auto max-w-screen-sm">
        <header className="bg-green-400 text-white">
          <NavBar pathname={pathname} />
        </header>
        <main>{children}</main>
        <footer>
          <p className="text-center p-4">&copy; Tim Ellison</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
