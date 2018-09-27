import React from 'react'
import './index.css';
import Link from '../components/Link';

const profileUrlStub = "https://res.cloudinary.com/dzwa7qhj1/image/upload/c_scale,e_grayscale,w_300/v1523146834/fullsizeoutput_e44";

class BlogIndex extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="home-page">
          <picture className="profile-pic-container">
            <source srcSet={`${profileUrlStub}.webp`} type="image/webp"/>
            <source srcSet={`${profileUrlStub}.png`} type="image/png"/>
            <img className="profile-pic" src={`${profileUrlStub}.png`} alt="Selfie of Tim Ellison"/>
          </picture>
          <p>Hi! I'm Tim, a User Interface Engineer. I love building things with HTML, CSS, and JavaScript — everything from apps to websites to emails and even eBooks.</p>
          <p>I’m available for consultation and small-scale projects, just <Link to="https://twitter.com/timothyjellison">send me a note on Twitter</Link>.</p>
        </div>
      </div>
    )
  }
}

export default BlogIndex
