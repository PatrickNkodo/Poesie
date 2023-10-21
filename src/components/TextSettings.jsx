import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import ProgressLine from "./progressionLine";
import "./textSettings.css";

const TextSettings = () => {
  const {
    size,
    setSize,
    setFont,
    font,
    fontStyle,
    setFontStyle,
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
    selectedSection,
  } = useGlobalContext();

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  //option's content to display as we click on a given option button
  const renderInput = (option) => {
    switch (option) {
      case "font":
        return (
          <div className="font-elements">
            <div className="font-name">
              <span>Police</span>
              <select
                name=""
                id="align"
                onChange={(e) => setFont(e.target.value)}
                value={font}
              >
                <option value="Allura">Allura</option>
                <option value="Barlow">Barlow</option>
                <option value="Condiment">Condiment</option>
                <option value="Dancing Script">Dancing Script</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Montserrat Alternates">
                  Montserrat Alternates
                </option>
                <option value="Open Sans">Open Sans</option>
                <option value="Oswald">Oswald</option>
                <option value="Playfair Display">Playfair Display</option>
                <option value="Roboto">Roboto</option>
                <option value="Young Serif">Young Serif</option>
                <option value="Arial">Arial</option>
                <option value="Cambria">Cambria</option>
                <option value="Cursive">Cursive</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Georgia">Georgia</option>
                <option value="Impact">Impact</option>
                <option value="monospace">Monospace</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Trebuchet Ms">Trebuchet Ms</option>
                <option value="Verdana">Verdana</option>
              </select>
            </div>
            <div className="font-size">
              <span>Taille de police</span>
              <input
                type="range"
                min="60"
                max="300"
                step="any"
                onChange={(e) => setSize(e.target.value)}
                value={size}
              />
            </div>
          </div>
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
      case "fontStyle":
        return (
          <select
            className="fontStyle form-control"
            onChange={(e) => setFontStyle(e.target.value)}
            value={fontStyle}
          >
            <option value="normal">Normal</option>
            <option value="italic">Italique</option>
          </select>
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
            className="align form-control"
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
            className="position form-control"
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
  useEffect(() => {
    renderInput(selectedOption);
  }, [selectedSection]);
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
          Modifier la police
        </button>
        {selectedOption === "font" && renderInput("font")}
      </div>
      {/* <hr /> */}
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
      <div className="fontStyle border">
        <button
          onClick={() => handleOptionClick("fontStyle")}
          className={`btn btn-dark btn-sm option-buttons ${
            selectedOption === "fontStyle" ? "active" : ""
          }`}
        >
          Modifier le style de police
        </button>
        {selectedOption === "fontStyle" && renderInput("fontStyle")}
      </div>
      <div className="font-weight border">
        <button
          onClick={() => handleOptionClick("weight")}
          className={`btn btn-dark btn-sm option-buttons ${
            selectedOption === "weight" ? "active" : ""
          }`}
        >
          Modifier l'épaisseur (Gras)
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
