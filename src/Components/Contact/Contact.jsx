import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

// enter your own web3 forms access key below

    formData.append("access_key", "01a87680-79a7-470b-b4ae-7286d82b6ae4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    
      alert(res.message);
    
  };

  return (
    <div id= 'contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='theme_pattern'/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I’m always excited to collaborate on innovative projects or share ideas. Feel free to reach out—I’d love to hear from you! Let’s create something amazing together.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail icon" />
              <p>padmapriya.0628@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call icon" />
              <p>703-810-9309</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location icon" />
              <p>United States</p>
            </div>
          </div>
        </div>
        <form onSubmit= {onSubmit}className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
          />
          <label htmlFor="message">Write your message</label>
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
          />
          <button className="contact-submit" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
