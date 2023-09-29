import React, { useState } from "react";
import { useGlobalContext } from "./context";
import TextSettings from "./components/TextSettings";
import BgSettings from "./components/BgSettings";

const RightEditorSidebar = () => {
  const [menu, setMenu] = useState("bg");
  return (
    <div className="modifications">
      <h5>Options</h5>
      <div className="tabs">
        {" "}
        <div
          className={`btn btn-outline-dark btn-sm ${
            menu === "text" ? "active" : ""
          }`}
          onClick={() => setMenu("text")}
        >
          Texte
        </div>
        <div
          className={`btn btn-outline-dark btn-sm ${
            menu === "bg" ? "active" : ""
          }`}
          onClick={() => setMenu("bg")}
        >
          Arriere-plan
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
