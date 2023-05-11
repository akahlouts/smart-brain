import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="form">
      <input onChange={onInputChange} />
      <button onClick={onButtonSubmit}>Detect</button>
    </div>
  );
};

export default ImageLinkForm;
