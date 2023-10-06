import React from "react";
import "./loader.css";
function Loader() {
  return (
    <div className="loader-parent">
      <div class="loader">
        <div class="face">
          <div class="circle"></div>
        </div>
        <div class="face">
          <div class="circle"></div>
        </div>
        <p>Poesie dans les airs</p>
      </div>
    </div>
  );
}

export default Loader;
