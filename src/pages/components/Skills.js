import React from 'react';
import './Skills.css'; 

function Skills({ skills, skillsList }) {
  return (
    <div className="tech-used">
      <div className="skills-body">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">
              <div
                className="skill-percent"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
            <div className="skill-percent-number">{skill.percent}%</div>
          </div>
        ))}
      </div>
      <hr id="skills-line" />
      <div className="other">
        <ul>
          {skillsList.map((skillsList, index) => (
            <li key={index}>{skillsList.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
