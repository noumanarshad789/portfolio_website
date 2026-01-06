import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import about_profile from "../../assets/about_profile.svg"

const About = () => {
    return (
        <div className='about'>

            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="about-sections">

                <div className="about-left">
                    <img src={about_profile} alt="" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced web developer with a passion for creating responsive and user-friendly websites.</p>
                        <p>My passion for frontend development drives me to build modern, efficient interfaces.</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React JS</p> <hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Javascript</p> <hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>Next JS</p> <hr style={{ width: "60%" }} /></div>
                    </div>
                </div>
            </div>

            <div className="about-acheivements">

                <div className="about-acheivement">
                    <h1>10+</h1>
                    <p> YEARS OF EXPERIENCE</p>
                </div>
                <hr />

                <div className="about-acheivement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />

                <div className="about-acheivement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <hr />

            </div>

        </div>
    )
}

export default About
