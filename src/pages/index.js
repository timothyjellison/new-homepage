import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import './index.css';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const profileUrlStub = "https://res.cloudinary.com/dzwa7qhj1/image/upload/c_scale,e_grayscale,w_300/v1523146834/fullsizeoutput_e44";

    return (
      <div>
        <Helmet title={siteTitle} />
        <div className="home-page">
          <picture>
            <source srcSet={`${profileUrlStub}.webp`} type="image/webp"/>
            <source srcSet={`${profileUrlStub}.png`} type="image/png"/>
            <img className="profile-pic" src={`${profileUrlStub}.png`} alt="Selfie of Tim Ellison"/>
          </picture>
          <p>Hi! I work at Comcast building web apps. If you’ve ever used Comcast’s web apps to upgrade your cable package or move your service to a new house, you're welcome 😂.</p>
          <p>I’m available for consultation and small-scale projects, just <a href="https://twitter.com/timothyjellison" target="_blank">hit me up on Twitter</a>.</p>
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
