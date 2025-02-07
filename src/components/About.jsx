export default function About() {
  return (
    <div className="aboutme">
      <h2>About Me</h2>
      <p>
        Detail-oriented data professional with expertise in data science,
        engineering, and analysis. Skilled in designing scalable data systems,
        developing ETL pipelines, and conducting statistical analyses.
        Proficient in Python, SQL, and cloud technologies, with experience in
        data visualization, predictive modeling, and workflow optimization to
        drive actionable insights and deliver impactful results.
      </p>

      <div className="skills">
        <h3>Skills</h3>
        <div className="contents">
          <div className="item">
            <p>Data Analysis</p>
            <div className="buttons">
              <button>Python</button>
              <button>R Studio</button>
              <button>Excel</button>
              <button>Power BI</button>
              <button>Tableau</button>
            </div>
          </div>
          <div className="item">
            <p>Cloud Computing</p>
            <div className="buttons">
              <button>AWS</button>
            </div>
          </div>
          <div className="item">
            <p>Big Data Technologies</p>
            <div className="buttons">
              <button>PySpark</button>
              <button>Databricks</button>
            </div>
          </div>
          <div className="item">
            <p>Version Control</p>
            <div className="buttons">
              <button>GitHub</button>
            </div>
          </div>
          <div className="item">
            <p>Data Manipulation</p>
            <div className="buttons">
              <button>Pandas</button>
              <button>Numpy</button>
            </div>
          </div>
          <div className="item">
            <p>Workflow Automation</p>
            <div className="buttons">
              <button>Apache Airflow</button>
            </div>
          </div>
          <div className="item">
            <p>Web Development</p>
            <div className="buttons">
              <button>HTML</button>
              <button>CSS</button>
              <button>JavaScript</button>
              <button>React</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
