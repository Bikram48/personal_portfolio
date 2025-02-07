import project1img from "../assets/img/happiness_analysis.png";
import project2img from "../assets/img/project2.png";
import project3img from "../assets/img/project3.png";
export default function Projects() {
  return (
    <div className="aboutme">
      <h2>Projects</h2>
      <div className="project-contents">
        <div className="project">
          <img src={project1img} alt="" />
          <p>Data Science | Linear Regression</p>
          <h3>Global Happiness Analysis</h3>
        </div>
        <div className="project">
          <img src={project2img} alt="" />
          <p>SQL | Data Analysis | Database Design</p>
          <h3>Library Management System Database</h3>
        </div>
        <div className="project">
          <img src={project3img} alt="" />
          <p>Excel | Data Analysis | Dashboard Design</p>
          <h3>Olympic Medals & Performance Insights</h3>
        </div>
      </div>
    </div>
  );
}
