import employeedata from '../assets/employeedata.png';
import markdown from '../assets/markdown.png';
import pinkcar from '../assets/pinkcar.png';
import portpic from '../assets/portpic.png';
import projects from '../assets/projects.png';
import weather from '../assets/weather.png';

export default function Portfolio() {
  return (
    
    <section className="portFlexContainer">

      <a
        href="https://github.com/je210506/readme-generator.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img
          className="card"
          src={markdown}
          rel="noopener noreferrer"
        />
        <p>ReadMe Generator</p>
      </a>

      <a
        href="https://github.com/je210506/Project-1-Group-6.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img
          className="card"
          src={projects}
          rel="noopener noreferrer"
        />
        <p>Project 1</p>
      </a>
      
      <a
        href="https://github.com/je210506/vehicle-generator.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img
          className="card"
          src={pinkcar}
          rel="noopener noreferrer"
        />
        <p>Vehicle Generator</p>
      </a>

      <a
        href="https://github.com/je210506/Employee-Tracking-Database-1.0.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img
          className="card"
          src={employeedata}
          rel="noopener noreferrer"
        />
        <p>Employee Tracking Database 1.0</p>
      </a>
      
      <a
        href="https://github.com/je210506/Jenny-s-Open-Weather-Predictions.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img
          className="card"
          src={weather}
          rel="noopener noreferrer"
        />
        <p>Open Weather Predictions</p>
      </a>

      <a
        href="https://github.com/je210506/Portfolio.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img
          className="card"
          src={portpic}
          rel="noopener noreferrer"
        />
        <p>Portfolio</p>
      </a>
    </section>
  );
}
