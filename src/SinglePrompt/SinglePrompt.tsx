import React, { useEffect, useRef, useState } from "react";

import Canvas from "./Canvas/Canvas";
import SubmissionArea from "./SubmissionArea/SubmissionArea";

import "./single-prompt.css";

interface SinglePromptProps {
  /* Name associated with the prompt. */
  name: string;
  /* Ground truth image source. */
  source: string;
  /* Callback called upon initializing canvas. */
  addCanvasRefCb: (promptName: string, canvasRef: any) => void;
  /* Callback called after submitting prompt. */
  submitPromptCb: () => void;
}

function SinglePrompt(props: SinglePromptProps) {
  const { name, source, addCanvasRefCb, submitPromptCb } = props;

  const [isPromptSubmitted, setIsPromptSubmitted] = useState(false);

  return (
    <div className="single-prompt">
      <div className="prompt-name">{name}</div>
      <div className="canvas-and-comparison">
        <Canvas
          name={name}
          disabled={isPromptSubmitted}
          addCanvasRefCb={addCanvasRefCb}
        />
        <SubmissionArea
          source={source}
          isPromptSubmitted={isPromptSubmitted}
          setIsPromptSubmitted={() => {
            setIsPromptSubmitted(true);
            submitPromptCb();
          }}
        />
      </div>
    </div>
  );
}

export default SinglePrompt;
