import { RiGraduationCapFill } from "react-icons/ri";
import { IoBriefcaseSharp } from "react-icons/io5";
export default function Resume() {
  return (
    <div className="aboutme">
      {/* <div className="title"> */}
      <h2>Resume</h2>
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
            <p>University of New Haven</p>
          </div>
          <div className="item item-1">
            <p>Dec 2021 - Nov 2022</p>
            <h4>Web Developer</h4>
            <p>ThemeGrill</p>
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
            <p>MS. in Data Science</p>
          </div>
          <div className="item item-1">
            <p>Jan 2018 - Sep 2021</p>
            <h4>The British College</h4>
            <p>BSc. Computing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
