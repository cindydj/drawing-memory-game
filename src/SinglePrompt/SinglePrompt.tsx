import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { SketchPicker } from "react-color";
import ERASER_PATH from "../images/eraser.svg";
import ERASER_UNSELECTED_PATH from "../images/eraser_unselected.svg";
import * as material from "material-colors";

import "./single-prompt.css";

const CANVAS_WIDTH = "200px";
// Color picker width is -10px compared to the canvas width to account for padding.
const COLOR_PICKER_WIDTH = "100px";
const COLOR_CIRCLE_SIZE = 14;
const COLOR_CIRCLE_SPACING = 5;
const AVAILABLE_COLORS = [
  material.black,
  material.red["500"],
  material.purple["500"],
  material.blue["500"],
  material.lightBlue["500"],
  material.green["500"],
  material.lightGreen["500"],
  material.yellow["500"],
  material.orange["500"],
  material.brown["500"],
];

const styles = {
  border: "1px solid #9c9c9c",
  borderRadius: "4px 4px 0px 0px",
};

const svgStyles = {
  borderRadius: styles.borderRadius,
};

interface SinglePromptProps {
  // Name associated with the logo.
  name: string;
  // Ground truth logo image source.
  source?: string;
  // List of available colors in hex. The first color will be the default selected color.
  defaultColor?: string;
}

function SinglePrompt(props: SinglePromptProps) {
  const { name, defaultColor } = props;

  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState(defaultColor || "#000000");
  const [isEraseMode, setIsEraseMode] = useState(false);
  const canvasRef = useRef<any>();

  return (
    <div className="single-prompt">
      <div className="logo-name">{name}</div>
      <div className="canvas-and-logo-comparison">
        <div className="canvas">
          <ReactSketchCanvas
            ref={canvasRef}
            style={styles}
            svgStyle={svgStyles}
            width={CANVAS_WIDTH}
            height="150px"
            strokeWidth={4}
            strokeColor="red"
          />
          <div className="drawing-controls">
            {/* <Tooltip title="Change color"> */}
            <div
              className="more-color-picker"
              style={{ backgroundColor: currentColor }}
              onClick={(): void => setIsColorPickerOpen(!isColorPickerOpen)}
            />
            {/* </Tooltip> */}
            {/* <Tooltip title="Erase"> */}
            <img
              className="eraser-option"
              src={isEraseMode ? ERASER_PATH : ERASER_UNSELECTED_PATH}
              onClick={(): void => {
                canvasRef.current.eraseMode(!isEraseMode);
                setIsEraseMode(!isEraseMode);
              }}
            />
            {/* </Tooltip> */}
          </div>
        </div>
      </div>
      {isColorPickerOpen && <SketchPicker />}
    </div>
  );
}

export default SinglePrompt;
