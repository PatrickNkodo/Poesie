import React, { useState } from "react";
import { useGlobalContext } from "./context";
import TextSettings from "./components/TextSettings";
import BgSettings from "./components/BgSettings";

const RightEditorSidebar = () => {
  const { selectedSection, changeSection } = useGlobalContext();
  const [menu, setMenu] = useState("text");
  return (
    <div className="modifications">
      {/* <h5>Options</h5> */}
      <div className="tabs">
        {" "}
        <div
          className={`btn btn-outline-dark btn-sm ${
            menu === "text" ? "active" : ""
          }`}
          onClick={() => setMenu("text")}
        >
          Reglages Texte
        </div>
        <div
          className={`btn btn-outline-dark btn-sm ${
            menu === "bg" ? "active" : ""
          }`}
          onClick={() => setMenu("bg")}
        >
          Reglages Arriere-plan
        </div>
        <div
          className={`btn btn-outline-dark btn-sm ${
            menu === "section" ? "active" : ""
          }`}
        >
          <label style={{ display: "block" }}>Appliquer sur</label>
          <select
            className="sectionSelect"
            onChange={(e) => changeSection(e.target.value)}
            value={selectedSection}
          >
            <option value="title">Titre uniquement</option>
            <option value="poem">Poème uniquement</option>
            <option value="author">Auteur uniquement</option>
            <option value="all">Tout</option>
          </select>
        </div>
      </div>
      <div className="menu">
        {menu === "text" ? (
          <TextSettings />
        ) : menu === "bg" ? (
          <BgSettings />
        ) : null}
      </div>
    </div>
  );
};
export default RightEditorSidebar;
