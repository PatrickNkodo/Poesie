import React from "react";
import { useGlobalContext } from "../context";
import "./textSettings.css";
const TextSettings = () => {
  const {
    size,
    setSize,
    setFont,
    font,
    setTextColor,
    textColor,
    setWeight,
    weight,
    setShadow,
    shadow,
    setLineHeight,
    lineHeight,
    setAlign,
    align,
    setPosition,
    position,
  } = useGlobalContext();
  return (
    <div className="textSettings">
      <h6>Modifications de texte</h6>
      <div className="font">
        <span>Police</span>
        <select
          name=""
          id="align"
          onChange={(e) => setFont(e.target.value)}
          value={font}
        >
          <option value="Arial">Arial</option>
          <option value="Cambria">Cambria</option>
          <option value="Cursive">Cursive</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Georgia">Georgia</option>
          <option value="Impact">Impact</option>
          <option value="monospace">Monospace</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Trebuchet Ms">Trebuchet Ms</option>
          <option value="verdana">Verdana</option>
          {/* <option value="justify">Justify</option> */}
        </select>
      </div>
      <hr />
      <div className="font-size">
        <span>Taille de police:</span>
        <input
          type="range"
          min="60"
          max="300"
          step="any"
          onChange={(e) => setSize(e.target.value)}
          value={size}
        />
      </div>
      <hr />
      <div className="colors">
        <span>Couleur de texte</span>
        <input
          type="color"
          className="form-control"
          onChange={(e) => setTextColor(e.target.value)}
          value={textColor}
        />
      </div>
      <hr />
      <div className="bold">
        <span>Gras:</span>
        <input
          type="range"
          min="500"
          max="600"
          step="100"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />
      </div>
      <hr />
      <div className="shadow">
        <span>Ombre de texte:</span>
        <input
          type="range"
          min="0"
          max="1"
          step="any"
          onChange={(e) => setShadow(e.target.value)}
          value={shadow}
        />
      </div>
      <hr />
      <div className="line-height">
        <span>Espacement:</span>
        <input
          type="range"
          min="20"
          max="50"
          step="any"
          onChange={(e) => setLineHeight(e.target.value)}
          value={lineHeight}
        />
      </div>
      <hr />
      <div className="align">
        <span>Aligner</span>
        <br />
        <select
          name=""
          id="align"
          onChange={(e) => setAlign(e.target.value)}
          value={align}
        >
          <option value="left">Gauche</option>
          <option value="center">Centre</option>
          <option value="right">Droite</option>
          {/* <option value="justify">Justify</option> */}
        </select>
      </div>
      <hr />
      <div className="align">
        <span>Positionner</span>
        <br />
        <select
          name=""
          id="position"
          onChange={(e) => setPosition(e.target.value)}
          value={position}
        >
          <option value="left">Gauche</option>
          <option value="center">Centre</option>
          <option value="right">Droite</option>
          {/* <option value="justify">Justify</option> */}
        </select>
      </div>
    </div>
  );
};
export default TextSettings;
