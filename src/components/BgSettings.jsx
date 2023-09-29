import React from "react";
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
    backgroundColor,
    setDirection,
    direction,
    gradient,
    color1,
    color2,
    bgColor,
  } = useGlobalContext();
  return (
    <div className="bgSettings">
      <h6>Modifications d'arrière-plan</h6>
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
      <hr />
      <div className="text-Bg">
        <span>Arriere de texte:</span>
        <input
          type="color"
          onChange={(e) => setTextBg(e.target.value)}
          value={textBg}
        />

        <span>Opacité d'Arrière :</span>
        <input
          type="range"
          min="0"
          max="1"
          step="any"
          onChange={(e) => setBgOpacity(e.target.value)}
          value={bgOpacity}
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
  );
};

export default BgSettings;
