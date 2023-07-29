import React, { useState } from "react";

import "./submission-area.css";
import Button from "../../components/Button/Button";

interface SubmissionAreaProps {
  emojiSource: string;
  isPromptSubmitted: boolean;
  setIsPromptSubmitted: (isPromptSubmitted: boolean) => void;
}

function SubmissionArea(props: SubmissionAreaProps) {
  const { emojiSource, isPromptSubmitted, setIsPromptSubmitted } = props;

  return (
    <div className="submission-area">
      {isPromptSubmitted ? (
        <img className="canvas-tool" src={emojiSource} />
      ) : (
        <Button onClick={(): void => setIsPromptSubmitted(true)}>Submit</Button>
      )}
    </div>
  );
}

export default SubmissionArea;
