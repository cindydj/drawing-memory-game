import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GamePage from "./DrawingMemoryGame/GamePage/GamePage";
import LandingPage from "./DrawingMemoryGame/LandingPage/LandingPage";
import { CAR_COMPANY_LOGO_PROMPT_INFO } from "./data/logo_prompts";
import { SLACKMOJI_PROMPT_INFO } from "./data/slackmoji_prompts";

import "./index.css";
import { convertTopicToPath, TOPICS } from "./DrawingMemoryGame/topics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: (
      <div id="error-page" className="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    ),
  },
  {
    path: convertTopicToPath(TOPICS.slackmojis),
    element: (
      <GamePage name={TOPICS.slackmojis} promptInfo={SLACKMOJI_PROMPT_INFO} />
    ),
  },
  {
    path: convertTopicToPath(TOPICS.carCompanyLogos),
    element: (
      <GamePage
        name={TOPICS.carCompanyLogos}
        promptInfo={CAR_COMPANY_LOGO_PROMPT_INFO}
      />
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
