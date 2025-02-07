import About from "./About";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import Resume from "./Resume";

export default function Main() {
  const location = useLocation();
  return (
    <div className="main-content">
      <Navbar />
      {location.pathname === "/" && <About />}
      {location.pathname === "/resume" && <Resume />}
    </div>
  );
}
