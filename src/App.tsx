import React from "react";
import "./App.css";
import SinglePrompt from "./SinglePrompt/SinglePrompt";

function App() {
  return (
    <div className="App">
      <div className="title">
        Logo Memory Game
        <div className="subtitle">
          Can you draw the logos below from memory?
        </div>
      </div>
      <div className="prompt-list">
        <SinglePrompt name="Hello" />
        <SinglePrompt name="World" />
        <SinglePrompt name="Yay" />
      </div>
    </div>
  );
}

export default App;
