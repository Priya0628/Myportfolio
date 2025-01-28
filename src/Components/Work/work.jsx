import React, { useState } from 'react';
import './work.css';
import services_data from '../../assets/services_data';
import theme_pattern from '../../assets/theme_pattern.svg'


const Work = () => {
  const [hoverIndex, setHoverIndex] = useState(null); // Track hover state

  return (
    <div id='work' className="work">
      <div className='work-title'>
       <h1> My Experience </h1>
       <img src={theme_pattern} alt='theme_pattern'/>
      </div>
      <div className="work-container">
        {services_data.map((service, index) => (
          <div
            key={index}
            className="work-format"
            onMouseEnter={() => setHoverIndex(index)} // Set hover index
            onMouseLeave={() => setHoverIndex(null)} // Reset hover index
          >
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            {/* Conditionally render s_place on hover */}
            {hoverIndex === index && <p className="hover-text">{service.s_place}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
