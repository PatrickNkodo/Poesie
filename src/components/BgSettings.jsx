import React, { useState } from "react";
import { useGlobalContext } from "../context";
import "./bgSettings.css";

const BgSettings = () => {
  const {
    overlay,
    setOverlay,
    setTextBg,
    textBg,
    setBgOpacity,
    bgOpacity,
    setBackgroundColor,
    backgroundColor,
    setDirection,
    direction,
    gradient,
    color1,
    color2,
  } = useGlobalContext();

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="bgSettings">
      {/* <h6>Modifications d'arrière-plan</h6> */}
      <div className="overlay border">
        <button
          onClick={() => handleButtonClick("exposure")}
          className={`btn btn-dark btn-sm option-buttons ${
            activeButton === "exposure" ? "active" : ""
          }`}
        >
          Exposure
        </button>
        {activeButton === "exposure" && (
          <input
            type="range"
            min="0"
            max="1"
            step="any"
            onChange={(e) => setOverlay(e.target.value)}
            value={overlay}
          />
        )}
      </div>
      <hr />
      <div className="text-bg border">
        <button
          onClick={() => handleButtonClick("textBg")}
          className={`btn btn-dark btn-sm option-buttons ${
            activeButton === "textBg" ? "active" : ""
          }`}
        >
          Arrière de texte
        </button>
        {activeButton === "textBg" && (
          <div className="textBg-elements">
            <div className="textBg-color">
              <span>Couleur</span>
              <input
                type="color"
                onChange={(e) => setTextBg(e.target.value)}
                value={textBg}
              />
            </div>
            <div className="textBg-opacity">
              <span>Opacité de couleur</span>
              <input
                type="range"
                min="0"
                max="1"
                step="any"
                onChange={(e) => setBgOpacity(e.target.value)}
                value={bgOpacity}
              />
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="bgcolors border">
        <button
          onClick={() => handleButtonClick("backgroundColor")}
          className={`btn btn-dark btn-sm option-buttons ${
            activeButton === "backgroundColor" ? "active" : ""
          }`}
        >
          Arrière plan
        </button>
        {activeButton === "backgroundColor" && (
          <input
            type="color"
            onChange={(e) => backgroundColor(e.target.value)}
            value={backgroundColor}
          />
        )}
      </div>
      <hr />
      <div className="gradient border">
        <button
          onClick={() => handleButtonClick("gradient")}
          className={`btn btn-dark btn-sm option-buttons ${
            activeButton === "gradient" ? "active" : ""
          }`}
        >
          Dégradé
        </button>
        {activeButton === "gradient" && (
          <div>
            <div className="gradient-colors">
              <div>
                <label htmlFor="">Couleur1: </label>
                <input
                  type="color"
                  className="form-control"
                  onChange={(e) => gradient(e.target.value, color2)}
                  value={color1}
                />
              </div>
              <div>
                <label htmlFor="">Couleur2: </label>
                <input
                  type="color"
                  className="form-control"
                  onChange={(e) => gradient(color1, e.target.value)}
                  value={color2}
                />
              </div>
            </div>
            <div className="gradient-direction">
              <span> Direction </span>
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
        )}
      </div>
    </div>
  );
};

export default BgSettings;
