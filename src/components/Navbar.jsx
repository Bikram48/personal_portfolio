import { FaHome, FaBriefcase } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
export default function Navbar() {
  return (
    <div className="desktop-navbar">
      <ul>
        <li>
          <a href="">
            <span>
              <FaHome />
            </span>
            Home
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <IoDocumentTextOutline />
            </span>
            Resume
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <FaBriefcase />
            </span>
            Projects
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <BiSolidContact />
            </span>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
