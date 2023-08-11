import React, { useEffect, useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { SketchPicker } from "react-color";

import Tooltip from "../../../components/Tooltip/Tooltip";
import { ReactComponent as AddIcon } from "../../../images/add.svg";
import { ReactComponent as DeleteIcon } from "../../../images/delete.svg";
import { ReactComponent as DownloadIcon } from "../../../images/download.svg";
import { ReactComponent as EraserIcon } from "../../../images/eraser.svg";
import { ReactComponent as UndoIcon } from "../../../images/undo.svg";
import { ReactComponent as RedoIcon } from "../../../images/redo.svg";

import "./canvas.css";

const CANVAS_WIDTH = "300px";
const CANVAS_HEIGHT = "300px";

enum ToolType {
  DRAW,
  ERASE,
}

const styles = {
  border: "1px solid #9c9c9c",
  borderRadius: "4px 4px 0px 0px",
};

const svgStyles = {
  borderRadius: styles.borderRadius,
};

interface CanvasProps {
  name: string;
  /* Default colors to make available, in hex. */
  colors: string[];
  disabled?: boolean;
  /* Callback called upon initializing canvas. */
  addCanvasRefCb: (promptName: string, canvasRef: any) => void;
}

function Canvas(props: CanvasProps) {
  const { name, colors, disabled, addCanvasRefCb } = props;

  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [currentColorHex, setCurrentColorHex] = useState(colors[0]);
  const [currentTool, setCurrentTool] = useState<ToolType>(ToolType.DRAW);
  const canvasRef = useRef<any>();

  useEffect(() => {
    addCanvasRefCb(name, canvasRef);
  }, []);

  // Helper functions to update the selected tool in the canvas.
  const setDrawToolMode = (): void => {
    canvasRef.current.eraseMode(false);
    setCurrentTool(ToolType.DRAW);
  };

  const setEraseToolMode = (): void => {
    canvasRef.current.eraseMode(true);
    setCurrentTool(ToolType.ERASE);
    if (isColorPickerOpen) {
      setIsColorPickerOpen(false);
    }
  };

  const undoEdit = (): void => {
    canvasRef.current.undo();
    if (isColorPickerOpen) {
      setIsColorPickerOpen(false);
    }
  };

  const redoEdit = (): void => {
    canvasRef.current.redo();
    if (isColorPickerOpen) {
      setIsColorPickerOpen(false);
    }
  };

  const clearCanvas = (): void => {
    canvasRef.current.clearCanvas();
    if (isColorPickerOpen) {
      setIsColorPickerOpen(false);
    }
  };

  const downloadImage = async (): Promise<void> => {
    const imagePath = await canvasRef.current.exportImage("png");
    const link = document.createElement("a");
    link.href = imagePath;
    link.download = `${name.replace(/:/g, "")}_by_memory`;
    link.click();
  };

  return (
    <>
      <div className="canvas">
        <div className={disabled ? "disabled" : ""}>
          <ReactSketchCanvas
            ref={canvasRef}
            style={styles}
            svgStyle={svgStyles}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            strokeWidth={10}
            strokeColor={currentColorHex}
          />
        </div>
        {!disabled && (
          <>
            <div className="drawing-controls">
              {colors.map((colorHex) => (
                <div
                  className={
                    "single-color-picker" +
                    (colorHex.toLowerCase().endsWith("ffffff")
                      ? " is-white"
                      : "") +
                    (colorHex === currentColorHex ? " selected" : "")
                  }
                  id={`${name}_${colorHex}`}
                  style={{
                    backgroundColor: colorHex,
                  }}
                  onClick={(): void => {
                    setCurrentColorHex(colorHex);
                    setDrawToolMode();
                    if (isColorPickerOpen) {
                      setIsColorPickerOpen(false);
                    }
                  }}
                />
              ))}
              <div className="more-color-picker-wrapper">
                <Tooltip text="Change color">
                  {colors.includes(currentColorHex) ? (
                    <AddIcon
                      className="more-color-picker"
                      onClick={(): void =>
                        setIsColorPickerOpen(!isColorPickerOpen)
                      }
                    />
                  ) : (
                    <div
                      className="more-color-picker"
                      id="more-color-picker"
                      style={{ backgroundColor: currentColorHex }}
                      onClick={(): void =>
                        setIsColorPickerOpen(!isColorPickerOpen)
                      }
                    />
                  )}
                </Tooltip>
                {isColorPickerOpen && (
                  <div className="color-picker-tooltip">
                    <SketchPicker
                      color={currentColorHex}
                      onChangeComplete={({ hex }) => {
                        setCurrentColorHex(hex);
                        setDrawToolMode();
                      }}
                    />
                  </div>
                )}
              </div>
              {/* There is a bug where eraser marks persist across all canvases, so removing ability to erase for now. */}
              {/* <Tooltip text="Eraser">
                <img
                  className={
                    "canvas-tool" +
                    (currentTool === ToolType.ERASE ? " selected" : "")
                  }
                  src={ERASER_PATH}
                  onClick={setEraseToolMode}
                />
              </Tooltip> */}
              <div className="separator" />
              <Tooltip text="Undo">
                <UndoIcon className="canvas-tool" onClick={undoEdit} />
              </Tooltip>
              <Tooltip text="Redo">
                <RedoIcon className="canvas-tool" onClick={redoEdit} />
              </Tooltip>
              <Tooltip text="Clear">
                <DeleteIcon className="canvas-tool" onClick={clearCanvas} />
              </Tooltip>
            </div>
          </>
        )}
        {disabled && (
          <div className="drawing-controls">
            <Tooltip text="Save as PNG">
              <DownloadIcon className="canvas-tool" onClick={downloadImage} />
            </Tooltip>
          </div>
        )}
      </div>
    </>
  );
}

export default Canvas;
