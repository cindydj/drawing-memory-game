import React, { useRef, useState } from "react";

import Canvas from "./Canvas/Canvas";
import SubmissionArea from "./SubmissionArea/SubmissionArea";

import "./single-prompt.css";

interface SinglePromptProps {
  // Name associated with the emoji.
  name: string;
  // Ground truth emoji image source.
  source: string;
}

function SinglePrompt(props: SinglePromptProps) {
  const { name, source } = props;

  const [isPromptSubmitted, setIsPromptSubmitted] = useState(false);

  return (
    <div className="single-prompt">
      <div className="prompt-name">{name}</div>
      <div className="canvas-and-comparison">
        <Canvas name={name} disabled={isPromptSubmitted} />
        <SubmissionArea
          emojiSource={source}
          isPromptSubmitted={isPromptSubmitted}
          setIsPromptSubmitted={setIsPromptSubmitted}
        />
      </div>
    </div>
  );
}

export default SinglePrompt;
