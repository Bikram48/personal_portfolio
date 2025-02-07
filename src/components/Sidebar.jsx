import profile from "../assets/img/profile.jpg";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={profile} alt="" />
      <div className="sidebar-info">
        <p className="name">Bikram Chand</p>
        <p>Data Scientist</p>
        <div className="social-icons">
          <div className="icon">
            <FaLinkedinIn className="linkedin-icon" />
          </div>
          <div className="icon">
            <FaGithub />
          </div>
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
  );
}
