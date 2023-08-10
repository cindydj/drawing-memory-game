import React from "react";

import "./landing-page.css";
import ImageButton from "../../components/ImageButton/ImageButton";
import SLACKMOJI_LOGO from "../../images/meow_painter.png";
import CAR_LOGO from "../../images/car.png";

function LandingPage() {
  return (
    <div className="page landing-page">
      <div className="page-title">
        Drawing Memory Game
        <div className="page-subtitle">
          Choose a topic to test your memory skills!
        </div>
      </div>
      <div className="topic-buttons">
        <ImageButton
          text="Slackmojis"
          imageSource={SLACKMOJI_LOGO}
          onClick={() => {
            console.log("Slackmojis!");
          }}
        />
        <ImageButton
          text="Car logos"
          imageSource={CAR_LOGO}
          onClick={() => {
            console.log("Car logos!");
          }}
        />
      </div>
    </div>
  );
}

export default LandingPage;
