import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
