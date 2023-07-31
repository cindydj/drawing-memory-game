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
const EMOJI_PROMPTS_TO_SOURCE: { [promptName: string]: string } = {
  ":pitchforks:": PITCHFORK_EMOJI,
  ":thonking:": THONKING_EMOJI,
  ":cheems_hmm:": CHEEMS_HMM_EMOJI,
  ":nervous_look:": NERVOUS_LOOK_EMOJI,
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
    return numSubmittedPrompts === Object.keys(EMOJI_PROMPTS_TO_SOURCE).length;
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
        {Object.entries(EMOJI_PROMPTS_TO_SOURCE).map(
          ([promptName, source]): JSX.Element => (
            <SinglePrompt
              key={promptName}
              name={promptName}
              source={source}
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
