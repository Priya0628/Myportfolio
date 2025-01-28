import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.png'

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt='theme_pattern'/>
      </div>
      <div className="about-section">
        <div className="about-left">
        <img src={profile} alt='profile'/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am Padma Priya, a recent graduate with a Master’s in Computer Science and a passion for creating innovative software solutions. With expertise in Python, Java, React.js, and AWS, I specialize in developing scalable web applications and optimizing system performance.</p>
            <p>I have hands-on experience in front-end and full-stack development, cloud computing, and machine learning, contributing to impactful projects like AI-powered systems and smart home automation. As a certified AWS Cloud Practitioner, I am committed to leveraging technology to solve real-world challenges and deliver meaningful results.</p>
          </div>
        </div>
      </div>
      <div className="about-edu">
            <div className="about-edud"> 
              <h1> Master's</h1>
              <p> Master of Science in Computer Science</p>
              <p> George Mason University</p>
              <p>Virginia, USA</p>
              <p>Graduated: Dec 2024</p>
              <p> GPA : 3.7/4.0</p>
            </div>
            <hr/>
            <div className="about-edud"> 
              <h1> Bachelor's</h1>
              <p> Bachelor of Engineering in Computer Science Engineeering</p>
              <p> St Joseph's College of Engineering</p>
              <p>Chennai, India</p>
              <p>Graduated: May 2022</p>
              <p>CGPA: 8.12/10.0</p>
            </div>
      </div>
    </div>
  );
};

export default About;
