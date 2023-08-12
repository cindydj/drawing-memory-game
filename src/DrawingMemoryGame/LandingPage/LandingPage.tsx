import React from "react";

import "./landing-page.css";
import ImageButton from "../../components/ImageButton/ImageButton";
import SLACKMOJI_LOGO from "../../images/meow_painter.png";
import CAR_COMPANY_LOGO from "../../images/car.png";
import { useNavigate } from "react-router-dom";
import { TOPICS, convertTopicToPath } from "../topics";

function LandingPage() {
  const navigate = useNavigate();

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
          text={`${TOPICS.slackmojis}s`}
          imageSource={SLACKMOJI_LOGO}
          onClick={() => {
            navigate(convertTopicToPath(TOPICS.slackmojis));
          }}
        />
        <ImageButton
          text={`${TOPICS.carCompanyLogos}s`}
          imageSource={CAR_COMPANY_LOGO}
          onClick={() => {
            navigate(convertTopicToPath(TOPICS.carCompanyLogos));
          }}
        />
      </div>
    </div>
  );
}

export default LandingPage;
