import icon from "../assets/img/half-moon.svg";

export default function Header() {
  return (
    <div className="header">
      <h1>
        Bikram <span className="lastname">Chand</span>
      </h1>
      <div className="background-changer">
        <li>
          <img src={icon} />
        </li>
      </div>
    </div>
  );
}
