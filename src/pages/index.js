import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout';

const profilePicUrlWithoutExt = "https://res.cloudinary.com/dzwa7qhj1/image/upload/v1568214114/IMG_1814";

export default (props) => (
  <Layout location={props.location}>
    <div className="home-page">
      <p className="block1 block"><span><em>Heya!</em> 👋<br/>I'm Tim.</span></p>
      <p className="block2 block">
        <span>I'm a web developer<br/>at <a href="https://jobs.netflix.com/" target="_blank" rel="noreferrer">Netflix</a>.</span>
      </p>
      <div className="block block2img"><img src="https://cdn.vox-cdn.com/thumbor/_bCV_w5p7SrZVsZG1RvRAhBOeBU=/39x0:3111x2048/1820x1213/filters:focal(39x0:3111x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"/></div>
      <picture className="block3 block">
        <source srcSet={`${profilePicUrlWithoutExt}.webp`} type="image/webp"/>
        <source srcSet={`${profilePicUrlWithoutExt}.png`} type="image/png"/>
        <img className="profile-pic" src={`${profilePicUrlWithoutExt}.png`} alt="Selfie of Tim Ellison"/>
      </picture>

      <p className="block4 block">
        <div>I'm on</div>
        <a href="https://twitter.com/zindex9999" target="_blank" rel="noopener">Twitter</a>
        <div>&</div>
        <a href="https://github.com/timothyjellison" target="blank" rel="noopener">Github</a>
      </p>
      <p className="block block5">
        👍
      </p>
      <div className="block block5extn"></div>
      <p className="block block6">
        <div>and<br/>I've written some</div>
        <a href="/articles"><em>articles</em></a>
      </p>
      <div className="block block7"></div>
      <div className="block block8"></div>
    </div>
  </Layout>
);
