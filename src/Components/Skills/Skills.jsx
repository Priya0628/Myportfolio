import React from 'react';
import './Skills.css';
import theme_pattern from '../../assets/theme_pattern.svg'


// Import skill logos
import pythonLogo from '../../assets/python.png';
import javascriptLogo from '../../assets/javascript.svg';
import cLogo from '../../assets/cLogo.png';
import ccLogo from '../../assets/ccLogo.png';
import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css3.svg';
import reactLogo from '../../assets/react.svg';
import figmaLogo from '../../assets/figma.svg';
import awsLogo from '../../assets/aws.PNG';

const Skills = () => {
  return (
    <div id='skills' className="skills">
      <div className="skills-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt='theme_pattern'/>
      </div>
      <div className="skills-grid">
        {/* Skill 1 */}
        <div className="skill-item">
          <img src={pythonLogo} alt="Python Logo" className="skill-logo" />
          <p>Python</p>
        </div>

        {/* Skill 2 */}
        <div className="skill-item">
          <img src={cLogo} alt="C Logo" className="skill-logo" />
          <p>C</p>
        </div>

        {/* Skill 3 */}
        <div className="skill-item">
          <img src={ccLogo} alt="C++ Logo" className="skill-logo" />
          <p>C++</p>
        </div>

        {/* Skill 4 */}
        <div className="skill-item">
          <img src={javascriptLogo} alt="JavaScript Logo" className="skill-logo" />
          <p>JavaScript</p>
        </div>

        {/* Skill 5 */}
        <div className="skill-item">
          <img src={htmlLogo} alt="HTML Logo" className="skill-logo" />
          <p>HTML</p>
        </div>

        {/* Skill 6 */}
        <div className="skill-item">
          <img src={cssLogo} alt="CSS3 Logo" className="skill-logo" />
          <p>CSS3</p>
        </div>

        {/* Skill 7 */}
        <div className="skill-item">
          <img src={reactLogo} alt="React Logo" className="skill-logo" />
          <p>React</p>
        </div>

        {/* Skill 8 */}
        <div className="skill-item">
          <img src={awsLogo} alt="aws Logo" className="skill-logo1" />
          <p>AWS Cloud</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
