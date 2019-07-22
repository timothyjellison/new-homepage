import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';
import Link from 'gatsby-link'
import './index.css';

const profileUrlStub = "https://res.cloudinary.com/dzwa7qhj1/image/upload/c_scale,e_grayscale,w_300/v1523146834/fullsizeoutput_e44";

class BlogIndex extends React.PureComponent {
  render() {
    return (
      <PageTransition>
        <div className="home-page">
          <picture className="profile-pic-container">
            <source srcSet={`${profileUrlStub}.webp`} type="image/webp"/>
            <source srcSet={`${profileUrlStub}.png`} type="image/png"/>
            <img className="profile-pic" src={`${profileUrlStub}.png`} alt="Selfie of Tim Ellison"/>
          </picture>
          <p>
            Heya 👋 I'm a user interface engineer at <a href="https://jobs.netflix.com/" target="_blank" rel="noreferrer">Netflix</a>. I help build tools for the studio side of Netflix, empowering film creators around the world.
          </p>
          <p>
            When I'm not building web applications and sites I like to <Link to="/reading">read</Link>, play guitar, garden, and play my Nintendo Switch.
          </p>
        </div>
      </PageTransition>
    )
  }
}

export default BlogIndex
