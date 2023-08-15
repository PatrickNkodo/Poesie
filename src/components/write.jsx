import React, { useEffect } from "react";
import categories from "../categories";
import { useGlobalContext } from "../context";
import poems from "../poems";
import "./write.css";

const Write = () => {
  const { title, setTitle, text, setText, name, setName, setWrapperBg } =
    useGlobalContext();

  setWrapperBg("/Images/image (43).jpg");

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

  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setText(localStorage.getItem("text"));
  }, []);
  return (
    <div className="write-container">
      <div className="poem-list">
        {filter[0].items.map((item, index) => (
          <div key={index} className="poem-item">
            <h3>{item.title}</h3>
            <button
              className="btn btn-primary"
              onClick={() => choosePoemTemplate(item.title, item.text)}
            >
              View poem template
            </button>
          </div>
        ))}
      </div>
      <div className="display write">
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
            onChange={(e) => setName(e.target.value)}
            value={localStorage.getItem("name")}
            placeholder="Entrez votre nom ici"
            required
          >
            ~
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default Write;
