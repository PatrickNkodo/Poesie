import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import logo from "../logo white.png";
import RightEditorSidebar from "../RightEditorSidebar";
import LeftEditorSidebar from "./LeftEditorSidebar";
import "./poem.css";
import { useNavigate } from "react-router-dom";
const Poem = () => {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [title, setTitle] = useState(localStorage.getItem("title"));
  const [text, setText] = useState(localStorage.getItem("text"));
  const linkTo = useNavigate();
  const {
    bg,
    textColor,
    bgColor,
    textBg,
    overlay,
    align,
    size,
    windowWidth,
    color1,
    color2,
    bgOpacity,
    direction,
    position,
    gradientPresent,
    bgImagePresent,
    lineHeight,
    font,
    fontStyle,
    weight,
    download,
    shadow,
    capture,
    lastSelectedSectionConditions,
    selectedSectionConditions,
    textStyle,
    poemAuthorStyles,
    setPoemAuthorStyles,
    poemTitleStyles,
    setPoemTitleStyles,
    poemBodyStyles,
    setPoemBodyStyles,
    completeStyle,
    setCompleteStyle,
    selectedSection,
    restoreStyles,
    setStateValues,
    setAlign,
    setFont,
    setSize,
    setFontStyle,
    setWeight,
    setLineHeight,
    setShadow,
  } = useGlobalContext();
  const hexToRGBA = (hex, alpha) => {
    const hexValue = hex.replace("#", "");
    const red = parseInt(hexValue.substr(0, 2), 16);
    const green = parseInt(hexValue.substr(2, 2), 16);
    const blue = parseInt(hexValue.substr(4, 2), 16);
    //need to find a way to stop running this function when changing other variables
    //console.log(`rgba(${red}, ${green}, ${blue}, ${alpha})`);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  };
  let style = {
    backgroundColor: bgColor,
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

  useEffect(() => {
    lastSelectedSectionConditions();
    selectedSectionConditions();
  }, [selectedSection]);
  return (
    <div className="poem-parent">
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
        <div id="capture" className="bg" style={{ ...style }}>
          <div className="logo">
            <img src={logo} alt="Logo" width="20%" />
          </div>
          <div className="overlay-bg" style={{ opacity: `${overlay}` }} />
          <div
            className="text"
            style={selectedSection === "all" ? textStyle : completeStyle}
          >
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
                    <span
                      style={
                        selectedSection === "title"
                          ? textStyle
                          : poemTitleStyles
                      }
                    >
                      {title}
                      <br />
                    </span>
                  </React.Fragment>
                )}
                <p
                  style={
                    selectedSection === "poem" ? textStyle : poemBodyStyles
                  }
                >
                  {text}
                </p>
                <br />
                <span
                  style={
                    selectedSection === "author" ? textStyle : poemAuthorStyles
                  }
                >
                  ~{name}
                </span>
              </div>
            </div>
          </div>
        </div>
        <RightEditorSidebar />
      </div>
      <div className="poem-fxns">
        <li
          onClick={() => linkTo("/write-poem")}
          className="modify btn btn-primary btn-sm"
        >
          <i className="fa fa-arrow-circle-left"></i>
          <span>Re-modifier</span>
        </li>
        <li
          className="download btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
          onClick={capture}
        >
          <span>Télécharger</span>
          <i className="fa fa-check-circle"></i>
        </li>
      </div>
    </div>
  );
};

export default Poem;
