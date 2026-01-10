import React, { useState } from 'react'
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import call_icon from "../../assets/call_icon.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import { toast } from 'react-toastify';

const Contact = () => {

const [result, setResult] = useState("");

const onSubmit = async (event) => {
  event.preventDefault();

  const form = event.target; // 🔑 store form reference
  const formData = new FormData(form);
    // 🔴 VALIDATION CHECK
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    toast.error("Please fill in all required fields!");
    return; // ⛔ stop submission
  }

  formData.append("access_key", "429a7e04-6232-4534-930b-85d33bb8e267");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      // ✅ success toast
      toast.success("Form submitted successfully!");

      // ✅ clear form fields
      form.reset();

      setResult("Success!");
    } else {
      toast.error("Failed to submit form!");
      setResult("Error");
    }
  } catch (error) {
    toast.error("Something went wrong!");
    setResult("Error");
  }
};


  return (
    <div  className='contact' id='contact'>
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
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" placeholder='Enter your message here' rows={8} ></textarea>
          <button type='submit' className="contact-submit">Submit now </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
