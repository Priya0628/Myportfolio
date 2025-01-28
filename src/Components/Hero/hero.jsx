import React from 'react'
import './Hero.css'
import hello from '../../assets/hello.png';
const hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={hello} alt="Profile" />
    <h1>
      <span>I'm Padma Priya </span>an aspiring Software Developer 
      </h1>
   <p>A Recent Graduate, Eagerly seeking early career opportunities to make an impact. </p><p>"The future belongs to those who believe in the power of their code and the beauty of their dreams."</p>
    <div className="heroaction">
      <div
  className="hero-resume"
  onClick={() => {
    // Trigger the file download
    const link = document.createElement("a");
    link.href = "/Padma_Priya_Resume.pdf"; // Path to the resume file
    link.download = "Padma_Priya_Resume.pdf"; // The file name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  My Resume
</div>

      </div>
    
    </div>

  )
}

export default hero