import React from "react";

import { AUTOMOTIVE_LOGO_PROMPT_INFO } from "./data/logo_prompts";
import GamePage from "./DrawingMemoryGame/GamePage/GamePage";
import LandingPage from "./DrawingMemoryGame/LandingPage/LandingPage";
import { SLACKMOJI_PROMPT_INFO } from "./data/slackmoji_prompts";

import "./App.css";

enum TOPICS {
  Slackmojis,
  AutomotiveLogos,
}

const TOPIC_DATA = {
  [TOPICS.Slackmojis]: {
    name: "Slackmoji",
    promptInfo: SLACKMOJI_PROMPT_INFO,
  },
  [TOPICS.AutomotiveLogos]: {
    name: "Logo",
    promptInfo: AUTOMOTIVE_LOGO_PROMPT_INFO,
  },
};

// NOTE: Update data/* in order to update prompts or colors.

function App() {
  // return <GamePage promptInfo={SLACKMOJI_PROMPT_INFO} />;
  return <LandingPage />;
}

export default App;
