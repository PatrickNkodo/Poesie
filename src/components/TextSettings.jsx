import React, { useState } from "react";
import { useGlobalContext } from "../context";
import ProgressLine from "./progressionLine";
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

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderInput = (option) => {
    switch (option) {
      case "font":
        return (
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
          </select>
        );
      case "size":
        return (
          <input
            type="range"
            min="60"
            max="300"
            step="any"
            onChange={(e) => setSize(e.target.value)}
            value={size}
          />
        );
      case "textColor":
        return (
          <input
            type="color"
            className="form-control"
            onChange={(e) => setTextColor(e.target.value)}
            value={textColor}
          />
        );
      case "weight":
        return (
          <input
            type="range"
            min="500"
            max="600"
            step="100"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
          />
        );
      case "shadow":
        return (
          <input
            type="range"
            min="0"
            max="1"
            step="any"
            onChange={(e) => setShadow(e.target.value)}
            value={shadow}
          />
        );
      case "lineHeight":
        return (
          <input
            type="range"
            min="20"
            max="50"
            step="any"
            onChange={(e) => setLineHeight(e.target.value)}
            value={lineHeight}
          />
        );
      case "align":
        return (
          <select
            className="align"
            onChange={(e) => setAlign(e.target.value)}
            value={align}
          >
            <option value="left">Gauche</option>
            <option value="center">Centre</option>
            <option value="right">Droite</option>
          </select>
        );
      case "position":
        return (
          <select
            name=""
            className="position"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
          >
            <option value="left">Gauche</option>
            <option value="center">Centre</option>
            <option value="right">Droite</option>
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="textSettings">
      {/* <h6>Modifications de texte</h6> */}
      <ProgressLine />
      <div className="font border">
        <button
          onClick={() => handleOptionClick("font")}
          className={`btn btn-dark btn-sm option-buttons ${
            selectedOption === "font" ? "active" : ""
          }`}
        >
          Modifier police
        </button>
        {selectedOption === "font" && renderInput("font")}
      </div>
      <hr />
      <div className="font-size border">
        <button
          onClick={() => handleOptionClick("size")}
          className={`btn btn-dark btn-sm option-buttons ${
            selectedOption === "size" ? "active" : ""
          }`}
        >
          Modifier taille de police
        </button>
        {selectedOption === "size" && renderInput("size")}
      </div>
      <hr />
      <div className="colors border">
        <button
          onClick={() => handleOptionClick("textColor")}
          className={`btn btn-dark btn-sm option-buttons ${
            selectedOption === "textColor" ? "active" : ""
          }`}
        >
          Modifier couleur de texte
        </button>
        {selectedOption === "textColor" && renderInput("textColor")}
      </div>
      <hr />
      <div className="font-weight border">
        <button
          onClick={() => handleOptionClick("weight")}
          className={`btn btn-dark btn-sm option-buttons ${
            selectedOption === "weight" ? "active" : ""
          }`}
        >
          Modifier épaisseur de police
        </button>
        {selectedOption === "weight" && renderInput("weight")}
      </div>
      <hr />
      <div className="text-shadow border">
        <button
          onClick={() => handleOptionClick("shadow")}
          className={`btn btn-dark btn-sm option-buttons ${
            selectedOption === "shadow" ? "active" : ""
          }`}
        >
          Modifier ombre de texte
        </button>
        {selectedOption === "shadow" && renderInput("shadow")}
      </div>
      <hr />
      <div className="line-height border">
        <button
          onClick={() => handleOptionClick("lineHeight")}
          className={`btn btn-dark btn-sm option-buttons ${
            selectedOption === "lineHeight" ? "active" : ""
          }`}
        >
          Modifier hauteur de ligne
        </button>
        {selectedOption === "lineHeight" && renderInput("lineHeight")}
      </div>
      <hr />
      <div className="text-align border">
        <button
          onClick={() => handleOptionClick("align")}
          className={`btn btn-dark btn-sm option-buttons ${
            selectedOption === "align" ? "active" : ""
          }`}
        >
          Aligner le texte
        </button>
        {selectedOption === "align" && renderInput("align")}
      </div>
      <hr />
      <div className="text-position border">
        <button
          onClick={() => handleOptionClick("position")}
          className={`btn btn-dark btn-sm option-buttons ${
            selectedOption === "position" ? "active" : ""
          }`}
        >
          Positionner le texte
        </button>
        {selectedOption === "position" && renderInput("position")}
      </div>
    </div>
  );
};

export default TextSettings;
