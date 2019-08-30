import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

class Layout extends React.PureComponent {
  render() {
    const {pathname} = get(this.props, 'location');
    const currentYear = new Date().getFullYear();

    return (
      <div>
        <Helmet title="Tim Ellison: Front-End Web Developer" />
        <div className="layout">

          <header className="header">
            <Link to={'/'} className="link">
              <h1 className={"name"}>Tim Ellison</h1>
              <h2>Front-End Web Developer</h2>
            </Link>
          </header>

          <nav className={"nav"}>
            <Link to="/" className={pathname === '/' ? "linkSelected" : "link"}>Home</Link>
            <Link to="/articles" className={(pathname.includes('posts') || pathname.includes('/articles'))  ? "linkSelected" : "link"}>Articles</Link>
            <Link to="/reading" className={pathname === '/reading' ? "linkSelected" : "link"}>Reading</Link>
            {/* <Link to="/music" className={pathname === '/music' ? "linkSelected" : "link"}>Music</Link> */}
          </nav>

          <main className={"mainContent"}>
            {this.props.children}
          </main>

          <footer className={"footer"}>
            Tim Ellison &copy; {currentYear}
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
