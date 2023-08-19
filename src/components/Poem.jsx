import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import logo from "../logo white.png";
import RightEditorSidebar from "../RightEditorSidebar";
import LeftEditorSidebar from "./LeftEditorSidebar";
import "./poem.css";
const Poem = () => {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [title, setTitle] = useState(localStorage.getItem("title"));
  const [text, setText] = useState(localStorage.getItem("text"));
  const {
    bg,
    textColor,
    bgColor,
    textBg,
    overlay,
    align,
    size,
    edition,
    color1,
    color2,
    bgOpacity,
    direction,
    position,
    gradientPresent,
    bgImagePresent,
    lineHeight,
    font,
    weight,
    download,
    shadow,
  } = useGlobalContext();
  const hexToRGBA = (hex, alpha) => {
    const hexValue = hex.replace("#", "");
    const red = parseInt(hexValue.substr(0, 2), 16);
    const green = parseInt(hexValue.substr(2, 2), 16);
    const blue = parseInt(hexValue.substr(4, 2), 16);
    //need to find a way to stop running this function when changing other variables
    console.log(`rgba(${red}, ${green}, ${blue}, ${alpha})`);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  };
  let style = {
    color: `${textColor}`,
    backgroundColor: `${bgColor}`,
  };
  if (gradientPresent) {
    style = {
      ...style,
      background: `linear-gradient(to ${direction}, ${color1},${color2})`,
    };
  }
  if (bgImagePresent) {
    style = { ...style, backgroundImage: `url('${bg}')` };
  }
  let textStyle = {
    textAlign: align,
    fontFamily: font,
    fontWeight: weight,
    fontSize: `${size}%`,
    lineHeight: lineHeight == 20 ? `normal` : `${lineHeight}px`,
    textShadow: `2px 2px 3px rgb(0,0,0,${shadow}) `,
  };

  return (
    <React.Fragment>
      <div className="modal-parent">
        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header justify-content-around">
                <button
                  onClick={download}
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Télécharger
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Fermer
                </button>
              </div>

              <div className="modal-body"></div>

              <div className="modal-footer">
                {/* <a href={`canvas.${toDataURL()}`} className="btn btn-success" download>Download</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="poem">
        <LeftEditorSidebar />
        <div
          id="capture"
          className="bg col-lg-10 col-md-10 col-sm-12"
          style={{ ...style }}
        >
          <div className="logo">
            <img src={logo} alt="Logo" width="20%" />
          </div>
          <div className="overlay-bg" style={{ opacity: `${overlay}` }} />
          <div className="text" style={textStyle}>
            <div
              className="text-bg"
              style={{
                margin:
                  position === "left"
                    ? 0
                    : position === "right"
                    ? `0 0 0 auto`
                    : "auto",
                backgroundColor: hexToRGBA(textBg, bgOpacity),
                backdropFilter:
                  parseInt(bgOpacity) === 0 ? "none" : "blur(15px)",
              }}
            >
              <div className="">
                {title && (
                  <React.Fragment>
                    <span>
                      {title}
                      <br />
                    </span>
                  </React.Fragment>
                )}
                <p>{text}</p>
                <br />
                <span>~{name}</span>
              </div>
            </div>
          </div>
        </div>
        <RightEditorSidebar />
      </div>
    </React.Fragment>
  );
};

export default Poem;
