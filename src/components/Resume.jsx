import { RiGraduationCapFill } from "react-icons/ri";
import { IoBriefcaseSharp } from "react-icons/io5";
export default function Resume() {
  return (
    <div className="aboutme">
      {/* <div className="title"> */}
      <h2>Work History</h2>
      {/* <div className="line"></div> */}
      {/* </div> */}
      <div className="resume-content">
        <div className="experience">
          <div className="title">
            <span>
              <IoBriefcaseSharp />
            </span>
            <h3>Experience</h3>
          </div>
          <div className="item item-1">
            <p>Aug 2024 - Present</p>
            <h4>Graduate Data Science Peer Tutor</h4>
            <p>University of New Haven, CT</p>
            <ul style={{ marginLeft: "30px", lineHeight: "40px" }}>
              <li>
                Support graduate students in clearing doubts regarding concepts
                in Machine Learning, Data Engineering, Python, R Studio, Excel
                and Github.
              </li>
              <li>
                Conduct one-on-one and group tutoring sessions, providing
                personalized help, feedback on coursework, and test preparation
                support.
              </li>
              <li>
                Host workshops for both beginner and advanced levels of Python.
              </li>
            </ul>
          </div>
          <div className="item item-1">
            <p>Dec 2021 - Nov 2022</p>
            <h4>Web Developer</h4>
            <p>ThemeGrill, Kathmandu</p>
            <ul style={{ marginLeft: "30px", lineHeight: "40px" }}>
              <li>Acquired proficiency in HTML, CSS, and JavaScript.</li>
              <li>
                Developed responsive wordpress themes that adapt seamlessly to
                various screen sizes and devices
              </li>
              <li>
                Developed expertise in WordPress development, focusing on Block
                Theme and WooCommerce Theme.
              </li>
            </ul>
          </div>
        </div>
        <div className="education">
          <div className="title">
            <span>
              <RiGraduationCapFill />
            </span>
            <h3>Education</h3>
          </div>
          <div className="item item-1">
            <p>Aug 2023 - May 2025</p>
            <h4>University of New Haven</h4>
            <p>
              MS. in Data Science -{" "}
              <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                CGPA: 3.8
              </span>
            </p>
          </div>
          <div className="item item-1">
            <p>Jan 2018 - Sep 2021</p>
            <h4>The British College</h4>
            <p>
              BSc. Computing -{" "}
              <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                First Class Honors
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
