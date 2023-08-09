import React, { useMemo, useState } from "react";

import "./App.css";
import SinglePrompt from "./SinglePrompt/SinglePrompt";
import CHEEMS_HMM_EMOJI from "./images/prompts/cheems_hmm.png";
import NERVOUS_LOOK_EMOJI from "./images/prompts/nervous_look.png";
import PITCHFORK_EMOJI from "./images/prompts/pitchfork.png";
import THONKING_EMOJI from "./images/prompts/thonking.png";
import Button from "./components/Button/Button";
import JSZip from "jszip";
import FileSaver from "file-saver";

// Update this value to add or update emoji prompts.
const EMOJI_PROMPT_INFO: {
  [promptName: string]: { source: string; colors: string[] };
} = {
  ":pitchforks:": {
    source: PITCHFORK_EMOJI,
    colors: [
      "#000000", // black
      "#5B0000", // brown
      "#FFFFFF", // white
    ],
  },
  ":thonking:": {
    source: THONKING_EMOJI,
    colors: [
      "#FFCC4D", // yellow-ish
      "#F4900B", // orange
      "#664500", // dark brown
    ],
  },
  ":cheems_hmm:": {
    source: CHEEMS_HMM_EMOJI,
    colors: [
      "#B97B2C", // dark tan
      "#DEC098", // tan
      "#000000", // black
    ],
  },
  ":nervous_look:": {
    source: NERVOUS_LOOK_EMOJI,
    colors: [
      "#8F1201", // brownish-red
      "#D3781B", // tan
      "#000000", // black
      "#FFFFFF", // white
    ],
  },
};

function App() {
  const [promptNameToCanvasRef, setPromptNameToCanvasRef] = useState<{
    [promptName: string]: any;
  }>({});
  const [numSubmittedPrompts, setNumSubmittedPrompts] = useState(0);

  const addCanvasRef = (promptName: string, canvasRef: any): void => {
    const newpromptNameToCanvasRef = promptNameToCanvasRef;
    newpromptNameToCanvasRef[promptName] = canvasRef;
    setPromptNameToCanvasRef(newpromptNameToCanvasRef);
  };

  const incrementSubmittedPrompts = (): void => {
    setNumSubmittedPrompts(numSubmittedPrompts + 1);
  };

  const areAllPromptsSubmitted = useMemo((): boolean => {
    return numSubmittedPrompts === Object.keys(EMOJI_PROMPT_INFO).length;
  }, [numSubmittedPrompts]);

  const downloadAllImages = async (): Promise<void> => {
    const zip = new JSZip();
    await Promise.all(
      Object.entries(promptNameToCanvasRef).map(
        async ([promptName, canvasRef]) => {
          const imagePath = await canvasRef.current.exportImage("png");
          // Grab the data from the base64 data URL.
          var dataStartIndex = imagePath.indexOf("base64,") + "base64,".length;
          const imageData = imagePath.substring(dataStartIndex);
          zip.file(`${promptName.replace(/:/g, "")}.png`, imageData, {
            base64: true,
          });
        }
      )
    );
    zip
      .generateAsync({ type: "blob" })
      .then((blob) => FileSaver.saveAs(blob, "emoji_memory_game.zip"));
  };

  return (
    <div className="App">
      <div className="title">
        Emoji Memory Game
        <div className="subtitle">
          Can you draw the emojis below from memory?
        </div>
      </div>
      <div className="prompt-list">
        {Object.entries(EMOJI_PROMPT_INFO).map(
          ([promptName, info]): JSX.Element => (
            <SinglePrompt
              key={promptName}
              name={promptName}
              source={info.source}
              colors={info.colors}
              addCanvasRefCb={addCanvasRef}
              submitPromptCb={incrementSubmittedPrompts}
            />
          )
        )}
      </div>
      <div
        className={
          "completion-section" + (areAllPromptsSubmitted ? "" : " hidden")
        }
      >
        <div className="thanks">Thanks for playing! 🎉</div>
        <Button onClick={downloadAllImages}>Download all images</Button>
      </div>
    </div>
  );
}

export default App;
