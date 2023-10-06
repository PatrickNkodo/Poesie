import React, { useEffect, useState } from "react";
import categories from "../categories";
import { useGlobalContext } from "../context";
import poems from "../poems";
import "./write.css";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [name, setName] = useState("");
  const { title, setTitle, text, setText, setWrapperBg } = useGlobalContext();
  const linkTo = useNavigate();

  // setWrapperBg("/Images/image (43).jpg");

  const filter = poems.filter(
    (item) => item.category === localStorage.getItem("category")
  );
  const choosePoemTemplate = (title, text) => {
    //open a modal and display
    setTitle(title);
    setText(text);
    localStorage.setItem("title", title);
    localStorage.setItem("text", text);
  };
  const handleTitle = (title) => {
    setTitle(title);
    localStorage.setItem("title", title);
  };
  const handleText = (text) => {
    setText(text);
    localStorage.setItem("text", text);
  };
  const handleName = (name) => {
    setName(name);
    localStorage.setItem("name", name);
  };

  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setText(localStorage.getItem("text"));
    setName(localStorage.getItem("name"));
  }, []);

  const itemLength = filter[0]?.items.length;

  return (
    <div className="">
      <div className="write-container">
        {localStorage.getItem("what") === "poem" && (
          <div className="poem-list">
            <div className="">
              {filter[0].items.map((item, index) => (
                <div key={index} className=" poem-item">
                  <h3
                    className={`${
                      item.length >= 10
                        ? "longTitle"
                        : item.length >= 12
                        ? "xLongTitle"
                        : null
                    }`}
                  >
                    {item.title}
                  </h3>
                  <button
                    className="btn btn-primary"
                    onClick={() => choosePoemTemplate(item.title, item.text)}
                  >
                    Choisir
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        <div
          className={`display write ${
            itemLength >= 12 ? "x-small" : itemLength >= 8 ? "smaller" : ""
          }`}
        >
          <div className="items">
            {localStorage.getItem("what") === "poem" && (
              <textarea
                className="form-control display-title"
                rows="1"
                onChange={(e) => handleTitle(e.target.value)}
                value={title}
                placeholder="Entrez le titre du poème"
                required
                autoFocus
              ></textarea>
            )}
            <textarea
              className="form-control display-text"
              onChange={(e) => handleText(e.target.value)}
              value={text}
              placeholder={
                localStorage.getItem("what") === "poem"
                  ? "Entrez le poème ici"
                  : "Entrez la citation ici"
              }
              required
            ></textarea>
            <textarea
              className="form-control display-author"
              rows="1"
              onChange={(e) => handleName(e.target.value)}
              value={name}
              placeholder="Entrez votre nom ici"
              required
            >
              ~
            </textarea>
          </div>
        </div>
      </div>
      <div className="choice-fxns">
        <li className="select">
          <span
            className={`nav-link btn btn-primary btn-sm`}
            onClick={() => linkTo("/form")}
          >
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>{" "}
            Catégories
          </span>
        </li>
        <li className="select">
          <span
            className={`nav-link btn btn-primary btn-sm`}
            onClick={() => linkTo("/poem-editor")}
          >
            <i className="fa fa-check-circle" aria-hidden="true"></i> Appliquer
          </span>
        </li>
      </div>
    </div>
  );
};

export default Write;
