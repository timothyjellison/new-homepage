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
          <p>Heya 👋 I'm Tim, a UI engineer at <a href="https://jobs.netflix.com/" target="_blank" rel="noreferrer">Netflix</a>.</p>
          <p>I'm interested in linguistic/literary technologies like NLP 🗣️, Unicode 🔣, bots 🤖, and emoji 🚀, plus topics at the boundaries of the verbal like music 🎵 and poetry 📚.</p>
        </div>
      </div>
    )
  }
}

export default BlogIndex
