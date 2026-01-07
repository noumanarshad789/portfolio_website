import React from 'react'
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import call_icon from "../../assets/call_icon.svg" 
import mail_icon from "../../assets/mail_icon.svg" 
import location_icon from "../../assets/location_icon.svg" 


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available for freelance work and open to new opportunities. Feel free to reach out if you have a project or idea you'd like to discuss!</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>softwarehouse@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+1 (555) 123-4567</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>123 Software Street, Code City, CC 12345</p>
                </div>
            </div>
        </div>
        <div className="contact-right">
            <label htmlFor="">Your name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" placeholder='Enter your message here' rows={8} ></textarea>
            <button type='submit' className="contact-submit">Submit now </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
