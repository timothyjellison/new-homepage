import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import './index.css';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={siteTitle} />
        <div className="home-page">
          <img className="profile-pic" src="https://www.timothyellison.com/wp-content/uploads/2018/08/profile-pic-300x300.jpg"></img>
          <p>Hi! I’m Tim, a web developer living in Philadelphia, PA. I work at Comcast building web apps, mostly with React and Node. If you’ve ever used Comcast’s web apps to upgrade your cable package or move your service to a new house, I probably helped build those pages.</p>
          <p>I’m available for consultation and small-scale projects, so if you’d like to get in touch I’d love to hear from you by email or on Twitter.</p>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
