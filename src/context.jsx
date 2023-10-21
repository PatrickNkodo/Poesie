import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import Poems from "./poems";
import html2canvas from "html2canvas";
import poems from "./poems";
// import sublinks from './data'
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [wrapperBg, setWrapperBg] = useState("/images/New folder/img1 (6).jpg");
  const [welcome, setWelcome] = useState(true);
  const [command, setCommand] = useState(false);
  const [commandName, setCommandName] = useState("");
  const [commandWhere, setCommandWhere] = useState("");
  const [commandWhat, setCommandWhat] = useState("");
  const [commandMsg, setCommandMsg] = useState("");
  const [position, setPosition] = useState("left");
  const [bg, setBg] = useState("");
  const [bgOpacity, setBgOpacity] = useState(0);
  const [textBg, setTextBg] = useState("#000000");
  const [fontStyle, setFontStyle] = useState("normal");
  const [image, setImage] = useState("");
  const [choice, setChoice] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [lineHeight, setLineHeight] = useState("20");
  const [formOpen, setFormOpen] = useState(false);
  const [help, sethelp] = useState(false);
  const [about, setAbout] = useState(false);
  const [itsPoem, setItsPoem] = useState(false);
  const [poem, setPoem] = useState(false);
  const [write, setWrite] = useState(false);
  const [poemBodyStyles, setPoemBodyStyles] = useState({}); // Store styles for the text section
  const [poemTitleStyles, setPoemTitleStyles] = useState({}); // Store styles for the poem title section
  const [completeStyle, setCompleteStyle] = useState({});
  const [poemAuthorStyles, setPoemAuthorStyles] = useState({});
  const [selectedSection, setSelectedSection] = useState("all"); // Track the selected section
  const [lastSelectedSection, setLastSelectedSection] = useState("all");
  const [overlay, setOverlay] = useState(0);
  const [align, setAlign] = useState("left");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [size, setSize] = useState(windowWidth < 576 ? 40 : 60);
  const [textColor, setTextColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#000000");
  const [url, setUrl] = useState("");
  const [gradientPresent, setgradientPresent] = useState(false);
  const [bgImagePresent, setbgImagePresent] = useState(false);
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#000000");
  const [shadow, setShadow] = useState(0);
  const [direction, setDirection] = useState("bottom");
  const [font, setFont] = useState("Arial");
  const [weight, setWeight] = useState(300);
  const [tab, setTab] = useState("Accueil");

  const prevent = (e) => {
    alert("stopped");
    e.preventDefault();
  };

  const display = (ID, category) => {
    const filterCategory = poems.filter((item) => item.category == category);
    filterCategory.map((poem) => {
      let myPoem = poem.items.filter((x) => x.id == ID);
      myPoem.map((data) => {
        const { id, title, text, author } = data;
        setTitle(title);
        setText(text);
        setAuthor(author);
      });
    });
  };
  let date = new Date();
  let time = date.getHours();
  //BG Image
  const changeBg = (item) => {
    setBg(item);
    setbgImagePresent(true);
    setgradientPresent(false);
  };
  const urlBg = async (url) => {
    // e.preventDefault();
    setbgImagePresent(true);
    setgradientPresent(false);
    const res = await fetch(url);
    const img = await res.blob(); //res.json for text files
    let localUrl = URL.createObjectURL(img); //Necessary method to convert url to image
    changeBg(localUrl);
  };
  // .catch((Error)=>console.log(Error))

  const urlBgHandler = () => {
    let img = document.getElementById("bgUrl");
    changeBg(img.value);
  };

  useEffect(() => {
    urlBg();
  }, []);
  //Bg Color
  const backgroundColor = (x) => {
    setBgColor(x);
    setbgImagePresent(false);
    setgradientPresent(false);
  };

  // const getChoice = () => {
  //   // if (!(name && category && composition && what)) {
  //   // 	alert('Veillez remplir tous les champs svp!');
  //   // 	return;
  //   // }
  //   if (composition == "help") {
  //     setChoice(true);
  //     setWrite(false);
  //     setPoem(false);
  //     setFormOpen(false);
  //     setWelcome(false);
  //     setAbout(false);
  //     sethelp(false);
  //     setEdition(false);
  //     setCommand(false);
  //   } else if (composition == "alone") {
  //     setWrite(true);
  //     setChoice(false);
  //     setPoem(false);
  //     setFormOpen(false);
  //     setWelcome(false);
  //     setAbout(false);
  //     sethelp(false);
  //     setEdition(false);
  //     setCommand(false);
  //   }
  // };

  const commandFxn = (e) => {
    setTab(e.target.innerText);
    setCommand(true);
    setFormOpen(false);
    setPoem(false);
    setWelcome(false);
    setAbout(false);
    sethelp(false);
  };

  //Bg Gradient
  const gradient = (a, b) => {
    // setWelcome(false)
    setBg("");
    setColor1(a);
    setColor2(b);
    setgradientPresent(true);
    setbgImagePresent(false);
  };
  const overlayHandler = (e) => {
    setOverlay(e.target.value);
    console.log(e.target.value);
  };

  const changeSection = (value) => {
    setLastSelectedSection(selectedSection);
    setSelectedSection(value);
  };
  const setStateValues = (obj) => {
    setAlign(obj.textAlign);
    setFont(obj.fontFamily);
    setFontStyle(obj.fontStyle);
    setWeight(obj.fontWeight);
    setSize(() => {
      let fontSize;
      if (obj?.fontSize?.includes("%")) {
        fontSize = obj.fontSize.replace("%", "");
      }
      return fontSize;
    });
    setLineHeight(obj.lineHeight);
    setShadow(obj.textShadow);
    setTextColor(obj.color);
  };

  let textStyle = {
    textAlign: align,
    color: textColor,
    fontFamily: font,
    fontStyle,
    fontWeight: weight,
    fontSize: `${size}%`,
    lineHeight: lineHeight == 20 ? `normal` : `${lineHeight}px`,
    textShadow: `2px 2px 3px rgb(0,0,0,${shadow}) `,
  };
  let defaultStyle = {
    textAlign: "left",
    color: "#ffffff",
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: `${windowWidth < 576 ? 40 : 60}%`,
    lineHeight: "20px",
    textShadow: `2px 2px 3px rgb(0,0,0,0) `,
  };

  //to save the styles of the last section on which one was, before choosing the current section
  const lastSelectedSectionConditions = () => {
    if (lastSelectedSection === "all") {
      setCompleteStyle((prevStyle) =>
        prevStyle ? { ...prevStyle, ...textStyle } : defaultStyle
      );
    } else if (lastSelectedSection === "poem") {
      setPoemBodyStyles((prevStyle) => ({ ...prevStyle, ...textStyle }));
    } else if (lastSelectedSection === "author") {
      setPoemAuthorStyles((prevStyle) => ({ ...prevStyle, ...textStyle }));
    } else if (lastSelectedSection === "title") {
      setPoemTitleStyles((prevStyle) => ({ ...prevStyle, ...textStyle }));
    }
  };
  //to apply the styles of the current section, and keep the styles in their corresponding style variables
  const selectedSectionConditions = () => {
    console.log(poemTitleStyles.color ? poemTitleStyles : "its not");
    let sectionStyles;
    if (selectedSection === "all") {
      sectionStyles = completeStyle.color ? completeStyle : defaultStyle;
    } else if (selectedSection === "title") {
      sectionStyles = poemTitleStyles.color ? poemTitleStyles : defaultStyle;
    } else if (selectedSection === "poem") {
      sectionStyles = poemBodyStyles.color ? poemBodyStyles : defaultStyle;
    } else if (selectedSection === "author") {
      sectionStyles = poemAuthorStyles.color ? poemAuthorStyles : defaultStyle;
    }
    //to Set back the values of the style variables according to the corresponding section variable's styles
    setStateValues(sectionStyles);
  };
  const restoreStyles = () => {
    setAlign("left");
    setFont("Arial");
    setFontStyle("normal");
    setWeight(300);
    setSize(windowWidth < 576 ? 40 : 60);
    setLineHeight("20");
    setShadow(0);
  };
  // const capture = () => {
  //   const modalBody = document.querySelector(".modal-body");
  //   const canvas = document.querySelector("#canvas");
  //   const captureElement = document.querySelector("#capture");

  //   if (canvas) {
  //     modalBody.removeChild(canvas);
  //   }

  //   const A4_WIDTH_PX = 2480; // Adjust based on desired DPI
  //   const A4_HEIGHT_PX = (A4_WIDTH_PX * 297) / 210; // Calculate height based on A4 aspect ratio

  //   html2canvas(captureElement, {
  //     allowTaint: true,
  //     useCORS: true,
  //     width: A4_WIDTH_PX,
  //     height: A4_HEIGHT_PX,
  //   }).then((canvas) => {
  //     canvas.setAttribute("id", "canvas");
  //     modalBody.appendChild(canvas);
  //   });
  // };

  // const download = () => {
  //   const canvas = document.getElementById("canvas");
  //   const a = document.createElement("a");
  //   a.href = canvas.toDataURL("image/jpeg");
  //   a.download = `${title}.jpg`;
  //   a.click();
  // };

  //Function to remove attributes
  const removeAttributes = (element, ...attr) => {
    attr.forEach((attr) => element.removeAttribute(attr));
  };

  const capture = () => {
    let modalBody = document.querySelector(".modal-body");
    let canvas = document.querySelector("#canvas");
    let capture = document.querySelector("#capture");
    if (canvas) {
      modalBody.innerHTML = "";
    }
    html2canvas(capture, {
      allowtaint: true,
      useCORS: true,
    }).then((canvas) => {
      canvas.setAttribute("id", "canvas"); //add it the id='canvas'
      modalBody.appendChild(canvas);
    });
  };
  const download = () => {
    let canvas = document.getElementById("canvas");
    // canvas.setAttribute('width',2480)
    let a = document.createElement("a");
    a.href = canvas.toDataURL("image/jpeg"); //The toDataURL returns a file/format file, with details on the canvas
    a.download = `${localStorage.getItem("title")}.jpg`;
    a.click();
  };

  // Helper function to convert data URL to Blob
  // const dataURLToBlob = (dataUrl) => {
  //   let arr = dataUrl.split(",");
  //   let mime = arr[0].match(/:(.*?);/)[1];
  //   let bstr = atob(arr[1]);
  //   let n = bstr.length;
  //   let u8arr = new Uint8Array(n);

  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }

  //   return new Blob([u8arr], { type: mime });
  // };

  //INTERNET EXPLORER AND EDGE METHODS... ONLY SAVES AS PNG
  // const download1=()=>{
  // 	if(window.navigator.msSaveBlob){
  // 		(canvas.msSaveBlob(), "image.png")
  //     }else{
  // 	let canvas=document.getElementById('canvas')
  // 	let a=document.createElement('a')
  // 	a.href=canvas.toDataURL('image/jpeg') //The toDataURL returns a file/format file, with details on the canvas
  // 	a.download='poem.jpeg'
  // 	a.click();
  // 	}
  // }
  //on input onChange
  // const uploadImg=(e)=>{
  // 	console.log(e.target.files)
  // 	setImage(e.target.files[0])
  // }
  //getImg now
  const handle = () => {
    const formData = new formData();
    formData.append(`image`, image);
    axios.post("url", formData).then((res) => {
      console.log(res);
    });
  };

  const sendRequest = (e) => {
    e.preventDefault();
    let a = document.createElement("a");
    if (commandWhere == "Facebook") {
      a.href = `https://m.me/Poésie dans les airs?text=${commandName} sent a message:<br/> ${commandMsg}`; //The toDataURL returns a file/format file, with details on the canvas
    }
    if (commandWhere == "Whatsapp") {
      a.href = `https://wa.me/237696950600/?text=${commandName} sent a message:<br/> ${commandMsg}`; //The toDataURL returns a file/format file, with details on the canvas
    }
    if (commandWhere == "LinkedIn") {
      a.href = `https://LinkedIn/?text=${commandName} sent a message:<br/> ${commandMsg}`; //The toDataURL returns a file/format file, with details on the canvas
    }
    a.target = "_blank";
    a.click();
    console.log(a.href);
    return;
  };
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //     console.log(windowWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });
  return (
    <AppContext.Provider
      value={{
        wrapperBg,
        setWrapperBg,
        textBg,
        setTextBg,
        commandFxn,
        command,
        setCommand,
        commandWhat,
        setCommandWhat,
        commandWhere,
        setCommandWhere,
        commandMsg,
        image,
        setImage,
        fontStyle,
        setFontStyle,
        urlBgHandler,
        prevent,
        setCommandMsg,
        commandName,
        setCommandName,
        formOpen,
        setFormOpen,
        write,
        choice,
        selectedSection,
        setSelectedSection,
        setChoice,
        bgOpacity,
        setBgOpacity,
        position,
        setPosition,
        // getChoice,
        display,
        title,
        setTitle,
        text,
        setText,
        author,
        setAuthor,
        // homeFxn,
        itsPoem,
        setItsPoem,
        poem,
        setPoem,
        changeBg,
        welcome,
        bg,
        tab,
        setBg,
        lastSelectedSection,
        setLastSelectedSection,
        poemAuthorStyles,
        setPoemAuthorStyles,
        poemTitleStyles,
        setPoemTitleStyles,
        poemBodyStyles,
        setPoemBodyStyles,
        completeStyle,
        setCompleteStyle,
        selectedSectionConditions,
        lastSelectedSectionConditions,
        textStyle,
        size,
        setSize,
        shadow,
        setShadow,
        overlay,
        setOverlay,
        overlayHandler,
        changeSection,
        setStateValues,
        align,
        setAlign,
        textColor,
        setTextColor,
        bgColor,
        setBgColor,
        backgroundColor,
        gradientPresent,
        gradient,
        color1,
        color2,
        direction,
        setDirection,
        bgImagePresent,
        setbgImagePresent,
        font,
        setFont,
        weight,
        setWeight,
        help,
        about,
        lineHeight,
        setLineHeight,
        capture,
        download,
        restoreStyles,
        urlBg,
        url,
        setUrl,
        sendRequest,
        handle,
        windowWidth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
export { AppProvider, AppContext };
