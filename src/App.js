import React from "react";
import './App.css';
import Main from "./components/Main.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MEMORY GAME</h1>
      </header>
      <Main className="App-main"/>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
