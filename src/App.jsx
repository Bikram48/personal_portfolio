import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [color, setColor] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <Header color={color} setColor={setColor} />
        <div className="main">
          <Sidebar />
          <Routes>
            <Route path="/personal_portfolio" element={<Main />} />
            <Route path="/resume" element={<Main />} />
            <Route path="/projects" element={<Main />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
