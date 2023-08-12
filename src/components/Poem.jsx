import React from "react";
import { useGlobalContext } from "../context";
import logo from "../logo white.png";
import RightEditorSidebar from "../RightEditorSidebar";
import LeftEditorSidebar from "./LeftEditorSidebar";
const Poem = () => {
  const {
    name,
    title,
    text,
    bg,
    textColor,
    bgColor,
    overlay,
    align,
    size,
    edition,
    color1,
    color2,
    direction,
    gradientPresent,
    bgImagePresent,
    lineHeight,
    font,
    weight,
    shadow,
  } = useGlobalContext();
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
    <div className="poem">
      <LeftEditorSidebar />
      <RightEditorSidebar />
      <div
        id="capture"
        className="bg col-lg-10 col-md-10 col-sm-12"
        style={{ ...style }}
      >
        <div className="logo">
          <img src={logo} alt="Logo" width="20%" />
        </div>
        <div className="overlay-bg" style={{ opacity: `${overlay}` }} />
        <div className="text" onChange={edition} style={textStyle}>
          {title && (
            <React.Fragment>
              <span>
                {title}
                <br />
              </span>
            </React.Fragment>
          )}
          {text}
          <br />
          <span>~{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Poem;
