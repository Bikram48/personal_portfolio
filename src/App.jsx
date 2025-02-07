import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/resume" element={<Main />} />
            <Route path="/projects" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
