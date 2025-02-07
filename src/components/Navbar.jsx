import { FaHome, FaBriefcase } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="desktop-navbar">
      <ul>
        <li>
          <NavLink to="/">
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
        <li>
          <NavLink to="/contact">
            <span>
              <BiSolidContact />
            </span>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
