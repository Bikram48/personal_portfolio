import About from "./About";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import Resume from "./Resume";
import Projects from "./Projects";

export default function Main() {
  const location = useLocation();
  return (
    <div className="main-content">
      <Navbar />
      {location.pathname === "/personal_portfolio" && <About />}
      {location.pathname === "/resume" && <Resume />}
      {location.pathname === "/projects" && <Projects />}
    </div>
  );
}
