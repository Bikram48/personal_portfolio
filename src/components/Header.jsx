import { useEffect } from "react";
import { useState } from "react";
import icon from "../assets/img/half-moon.svg";

export default function Header({ color, setColor }) {
  function handleClick() {
    setColor(color == false ? true : false);

    console.log(color);
  }

  useEffect(() => {
    document.body.style.backgroundColor = color ? "#F2F5F9" : "black";
    document.body.style.color = color ? "black" : "#F2F5F9";
  }, [color]);

  return (
    <div className="header">
      <h1>
        Bikram <span className="lastname">Chand</span>
      </h1>
      <div className="background-changer">
        <li onClick={handleClick}>
          <img src={icon} />
        </li>
      </div>
    </div>
  );
}
