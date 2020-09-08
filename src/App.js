import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world!</p>
        <p>Vamos contar:</p>
        <button>Contar</button>
        <a
          className="App-link"
          href="http://pudim.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pudim
        </a>
      </header>
    </div>
  );
}

export default App;
