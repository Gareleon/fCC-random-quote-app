import logo from "./logo.svg";
import "./App.css";
import RandomQuoteGenerator from "./components";
import React from "react";
import TestRunner from "./test"; // Import the test runner

function App() {
  return (
    <div className="App">
      <RandomQuoteGenerator />
    </div>
  );
}

export default App;
