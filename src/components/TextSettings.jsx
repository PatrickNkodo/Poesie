import React from "react";
import { useGlobalContext } from "../context";

const TextSettings = () => {
  const { size, setSize } = useGlobalContext();
  return (
    <React.Fragment>
      <div className="font">
        <span>Police</span>
        <select
          name=""
          id="aligh"
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
      <div className="colors">
        <span>Couleur de texte</span>
        <input
          type="color"
          className="form-control"
          onChange={(e) => setTextColor(e.target.value)}
          value={textColor}
        />
      </div>
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
      <div className="align">
        <span>Positioner le texte</span>
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
    </React.Fragment>
  );
};
export default TextSettings;
