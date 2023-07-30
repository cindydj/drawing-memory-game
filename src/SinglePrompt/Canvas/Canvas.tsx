import React, { useEffect, useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { SketchPicker } from "react-color";

import Tooltip from "../../components/Tooltip/Tooltip";
import DELETE_PATH from "../../images/delete.svg";
import DOWNLOAD_PATH from "../../images/download.svg";
import ERASER_PATH from "../../images/eraser.svg";
import PAINT_BRUSH_PATH from "../../images/paint_brush.svg";
import UNDO_PATH from "../../images/undo.svg";
import REDO_PATH from "../../images/redo.svg";

import "./canvas.css";

const CANVAS_WIDTH = "300px";
const CANVAS_HEIGHT = "300px";
const DEFAULT_DRAWING_COLOR = "#000000";

enum ToolType {
  DRAW,
  ERASE,
  UNDO,
  REDO,
  CLEAR,
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
  disabled?: boolean;
  /* Callback called upon initializing canvas. */
  addCanvasRefCb: (promptName: string, canvasRef: any) => void;
}

function Canvas(props: CanvasProps) {
  const { name, disabled, addCanvasRefCb } = props;

  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [currentColorHex, setCurrentColorHex] = useState(DEFAULT_DRAWING_COLOR);
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
  };

  const undoEdit = (): void => {
    canvasRef.current.undo();
  };

  const redoEdit = (): void => {
    canvasRef.current.redo();
  };

  const clearCanvas = (): void => {
    canvasRef.current.clearCanvas();
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
            strokeWidth={4}
            strokeColor={currentColorHex}
          />
        </div>
        {!disabled && (
          <>
            <div className="drawing-controls">
              <Tooltip text="Change color">
                <div
                  className="more-color-picker"
                  id="more-color-picker"
                  style={{ backgroundColor: currentColorHex }}
                  onClick={(): void => setIsColorPickerOpen(!isColorPickerOpen)}
                />
              </Tooltip>
              <Tooltip text="Pen">
                <img
                  className={
                    "canvas-tool" +
                    (currentTool === ToolType.DRAW ? " selected" : "")
                  }
                  src={PAINT_BRUSH_PATH}
                  onClick={setDrawToolMode}
                />
              </Tooltip>
              <Tooltip text="Eraser">
                <img
                  className={
                    "canvas-tool" +
                    (currentTool === ToolType.ERASE ? " selected" : "")
                  }
                  src={ERASER_PATH}
                  onClick={setEraseToolMode}
                />
              </Tooltip>
              <div className="separator" />
              <Tooltip text="Undo">
                <img
                  className="canvas-tool"
                  src={UNDO_PATH}
                  onClick={undoEdit}
                />
              </Tooltip>
              <Tooltip text="Redo">
                <img
                  className="canvas-tool"
                  src={REDO_PATH}
                  onClick={redoEdit}
                />
              </Tooltip>
              <Tooltip text="Clear">
                <img
                  className="canvas-tool"
                  src={DELETE_PATH}
                  onClick={clearCanvas}
                />
              </Tooltip>
            </div>
            {isColorPickerOpen && (
              <SketchPicker
                color={currentColorHex}
                onChangeComplete={({ hex }) => {
                  console.log(hex);
                  setCurrentColorHex(hex);
                  setDrawToolMode();
                }}
              />
            )}
          </>
        )}
        {disabled && (
          <div className="drawing-controls">
            <Tooltip text="Save as PNG">
              <img
                className="canvas-tool"
                src={DOWNLOAD_PATH}
                onClick={downloadImage}
              />
            </Tooltip>
          </div>
        )}
      </div>
    </>
  );
}

export default Canvas;
