import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <p>Front End</p>
      <ul className="list">
        <li>
          <img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        </li>
        <li>
          <img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        </li>
        <li>
          <img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        </li>
        <li>
          <img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        </li>
        <li>
          <img  className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />
        </li>
      </ul>
      <p>Back End</p>
      <ul className="list">
        <li>
          <img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
        </li>
        <li>
        <img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />

        </li>
      </ul>
      <p>Other</p>
      <ul className="list">
        <li>
          <img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </li>
        <li>
        <img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />

        </li>
        <li>
        <img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original-wordmark.svg" />

        </li>
      </ul>
    </div>
  );
};
export default Skills;
