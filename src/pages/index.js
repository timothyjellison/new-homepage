import React from 'react'
import './index.css';
import PageTransition from 'gatsby-plugin-page-transitions';

const profileUrlStub = "https://res.cloudinary.com/dzwa7qhj1/image/upload/c_scale,e_grayscale,w_300/v1523146834/fullsizeoutput_e44";

class BlogIndex extends React.PureComponent {
  render() {
    return (
      <PageTransition>
        <div>
          <div className="home-page">
            <picture className="profile-pic-container">
              <source srcSet={`${profileUrlStub}.webp`} type="image/webp"/>
              <source srcSet={`${profileUrlStub}.png`} type="image/png"/>
              <img className="profile-pic" src={`${profileUrlStub}.png`} alt="Selfie of Tim Ellison"/>
            </picture>
            <p>Hi! I'm Tim, a User Interface Engineer. I love building things with HTML, CSS, and JavaScript — everything from apps to websites to emails and even eBooks.</p>
            <p>I’m available for consultation and small-scale projects, just <a href="https://twitter.com/timothyjellison" target="_blank">send me a note on Twitter</a>.</p>
          </div>
        </div>
      </PageTransition>
    )
  }
}

export default BlogIndex
