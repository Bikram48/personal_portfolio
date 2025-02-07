import { useEffect } from "react";
import icon from "../assets/img/half-moon.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { FaHome, FaBriefcase } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Header({ color, setColor }) {
  function handleClick() {
    setColor(color == false ? true : false);
  }

  useEffect(() => {
    document.body.style.backgroundColor = color ? "#F2F5F9" : "black";
    document.body.style.color = color ? "black" : "#F2F5F9";
  }, [color]);

  return (
    <div className="header">
      <h1>
        <a style={{ textDecoration: "none" }} href="/">
          Bikram <span className="lastname">Chand</span>
        </a>
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div style={{ cursor: "pointer" }} className="background-changer">
          <li onClick={handleClick}>
            <img src={icon} />
          </li>
        </div>
        {/* <li
          className="mobile-nav_icon"
          style={{ listStyleType: "none", fontSize: "25px" }}
        >
          <a style={{ color: "black" }} href="">
            <RxHamburgerMenu />
          </a>
        </li> */}
      </div>
    </div>
  );
}
