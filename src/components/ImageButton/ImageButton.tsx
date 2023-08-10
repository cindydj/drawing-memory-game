import React from "react";

import "./image-button.css";

interface ImageButtonProps {
  text: string;
  imageSource: string;
  onClick: () => void;
}

function ImageButton(props: ImageButtonProps) {
  const { text, imageSource, onClick } = props;

  return (
    <div className="image-button-style" onClick={onClick}>
      <img className="button-image" src={imageSource} />
      {text}
    </div>
  );
}

export default ImageButton;
