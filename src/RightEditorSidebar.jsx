import React from "react";
import { useGlobalContext } from "./context";

const RightEditorSidebar = () => {
  const {
    overlay,
    setOverlay,
    align,
    setAlign,
    gradient,
    direction,
    setDirection,
    size,
    setSize,
    setTextColor,
    textColor,
    bgColor,
    backgroundColor,
    color1,
    color2,
    font,
    setFont,
    weight,
    setWeight,
    lineHeight,
    setLineHeight,
    shadow,
    setShadow,
  } = useGlobalContext();

  return (
    <div className="modifications">
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
      <div className="overlay">
        <span>Exposure:</span>
        <input
          type="range"
          min="0"
          max="1"
          step="any"
          onChange={(e) => setOverlay(e.target.value)}
          value={overlay}
        />
      </div>
      <div className="overlay">
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
      <div className="bgcolors">
        <span>Arrière plan</span>
        <input
          type="color"
          className="form-control"
          onChange={(e) => backgroundColor(e.target.value)}
          value={bgColor}
        />
      </div>
      <hr />
      <div className="gradient">
        <span>Dégradé</span>
        <div className="">
          <label htmlFor="">Couleur1 </label>
          <input
            type="color"
            className="form-control"
            onChange={(e) => gradient(e.target.value, color2)}
            value={color1}
          />
          <label htmlFor="">Couleur2 </label>
          <input
            type="color"
            className="form-control"
            onChange={(e) => gradient(color1, e.target.value)}
            value={color2}
          />
          <div className="">
            <span>Direction </span>
            <select
              name=""
              id="direction"
              onChange={(e) => setDirection(e.target.value)}
              value={direction}
            >
              <option value="left">Droite-Gauche</option>
              <option value="right">Gauche-Droite</option>
              <option value="top">Bas-Haut</option>
              <option value="bottom">Haut-Bas</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default RightEditorSidebar;
