import React from "react";

import "./App.css";
import SinglePrompt from "./SinglePrompt/SinglePrompt";
import PITCHFORK_EMOJI from "./images/prompts/pitchfork.png";

function App() {
  return (
    <div className="App">
      <div className="title">
        Emoji Memory Game
        <div className="subtitle">
          Can you draw the emojis below from memory?
        </div>
      </div>
      <div className="prompt-list">
        <SinglePrompt name=":pitchforks:" source={PITCHFORK_EMOJI} />
        <SinglePrompt name="World" source="" />
        <SinglePrompt name="Yay" source="" />
      </div>
    </div>
  );
}

export default App;
