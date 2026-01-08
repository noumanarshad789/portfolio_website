import React from 'react'
import './Hero.css'
import profile_img from "../../assets/profile_img.svg"

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img} alt="" />
       <h1><span>I'm Alex Bennett</span>, frontend developer based in USA.</h1>
      <p>I am a frontend developer with a passion for creating responsive and user-friendly websites.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href='#contact'>Connect with me</a>
        </div>
        <div className="my-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
