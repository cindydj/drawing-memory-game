import React, { useState } from "react";

import "./submission-area.css";
import Button from "../../../components/Button/Button";

interface SubmissionAreaProps {
  source: string;
  isPromptSubmitted: boolean;
  /* Callback called when prompt is submitted. */
  setIsPromptSubmitted: () => void;
}

function SubmissionArea(props: SubmissionAreaProps) {
  const { source, isPromptSubmitted, setIsPromptSubmitted } = props;

  return (
    <div className="submission-area">
      {isPromptSubmitted ? (
        <img className="golden-image" src={source} />
      ) : (
        <Button onClick={setIsPromptSubmitted}>Submit</Button>
      )}
    </div>
  );
}

export default SubmissionArea;
