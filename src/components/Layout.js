import React, { Fragment } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

class Layout extends React.PureComponent {
  componentDidMount() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }

  render() {
    const { pathname } = get(this.props, 'location')
    const currentYear = new Date().getFullYear()

    return (
      <>
        <Helmet title="Tim Ellison: UI Engineer">
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Helmet>
        <div className="layout">
          <header className="header grid">
            <Link to={'/'} className="link">
              <h1 className={'name'}>Tim Ellison</h1>
              <h2>UI Engineer</h2>
            </Link>
          </header>

          <nav className="nav grid">
            <div className="navItems">
              <Link
                to="/"
                className={pathname === '/' ? 'linkSelected' : 'link'}
              >
                Home
              </Link>
              <Link
                to="/faves"
                className={
                  pathname.includes('faves') || pathname === '/faves'
                    ? 'linkSelected'
                    : 'link'
                }
              >
                Faves
              </Link>
              {/* <Link to="/music" className={pathname === '/music' ? "linkSelected" : "link"}>Music</Link> */}
            </div>
          </nav>

          <main className={'mainContent grid'}>{this.props.children}</main>

          <footer className={'footer'}>Tim Ellison &copy; {currentYear}</footer>
        </div>
      </>
    )
  }
}

export default Layout
