import React from 'react'
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

          <main className={'mainContent grid'}>{this.props.children}</main>

          <footer className={'footer'}>Tim Ellison &copy; {currentYear}</footer>
        </div>
      </>
    )
  }
}

export default Layout
