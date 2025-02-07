import profile from "../assets/img/profile.jpg";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBriefcase } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Sidebar() {
  const roles = ["Data Analyst", "Data Engineer", "Data Scientist"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (charIndex < roles[currentRoleIndex].length) {
        setDisplayText(
          (prevText) => prevText + roles[currentRoleIndex][charIndex]
        );
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, [charIndex, currentRoleIndex]);
  return (
    <div>
      <div className="mobile-navbar">
        <ul>
          <li>
            <NavLink to="/personal_portfolio/">
              <span>
                <FaHome />
              </span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              <span>
                <IoDocumentTextOutline />
              </span>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <span>
                <FaBriefcase />
              </span>
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sidebar">
        <img src={profile} alt="" />
        <div className="sidebar-info">
          <p className="name">Bikram Chand</p>
          <div className="role-animator">
            <p className="animated-role">{displayText}</p>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/bikram-chand/" target="_blank">
              <div className="icon">
                <FaLinkedinIn className="linkedin-icon" />
              </div>
            </a>
            <a href="https://github.com/Bikram48" target="_blank">
              <div className="icon">
                <FaGithub />
              </div>
            </a>
          </div>
          <div className="contact-info">
            <div className="info">
              <IoIosPhonePortrait className="icon1" />
              <div className="text">
                <p>Phone</p>
                <p>2036002195</p>
              </div>
            </div>
            <div className="info">
              <MdOutlineMailOutline className="icon2" />
              <div className="text">
                <p>Email</p>
                <p>chandbikram001@gmail.com</p>
              </div>
            </div>
            <div className="info">
              <IoLocationOutline className="icon3" />
              <div className="text">
                <p>Location</p>
                <p>West Haven, CT</p>
              </div>
            </div>
            <a href="/resume.pdf" download="My_Resume.pdf">
              <button style={{ cursor: "pointer" }}>
                <FaDownload />
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
