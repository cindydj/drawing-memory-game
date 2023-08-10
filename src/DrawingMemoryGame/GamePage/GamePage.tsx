import React, { useMemo, useState } from "react";

import SinglePrompt from "../SinglePrompt/SinglePrompt";
import Button from "../../components/Button/Button";
import JSZip from "jszip";
import FileSaver from "file-saver";

import "./game-page.css";

interface GamePageProps {
  promptInfo: { [promptName: string]: { source: string; colors: string[] } };
}

function GamePage(props: GamePageProps) {
  const { promptInfo } = props;
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
    return numSubmittedPrompts === Object.keys(promptInfo).length;
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
      .then((blob) => FileSaver.saveAs(blob, "drawing_memory_game.zip"));
  };

  return (
    <div className="page game-page">
      <div className="page-title">
        Slackmoji Memory Game
        <div className="page-subtitle">
          Can you draw the slackmojis below from memory?
        </div>
      </div>
      <div className="prompt-list">
        {Object.entries(promptInfo).map(
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

export default GamePage;
