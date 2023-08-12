import React from "react";
import categories from "../categories";
import { useGlobalContext } from "../context";
import poems from "../poems";
const Write = () => {
  const {
    display,
    category,
    title,
    setTitle,
    text,
    setText,
    name,
    setName,
    setWrapperBg,
    what,
  } = useGlobalContext();
  setWrapperBg("/Images/image (43).jpg");
  const filter = poems.filter((item) => item.category == category);
  return (
    <div>
      <div className="display write p-3">
        <div className="items">
          {what == "poem" && (
            <textarea
              className="form-control display-title"
              rows="1"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Entrez le titre du poème"
              required
              autoFocus
            ></textarea>
          )}
          <textarea
            className="form-control display-text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder={
              what == "poem" ? "Entrez le poème ici" : "Entrez la citation ici"
            }
            required
          ></textarea>
          <textarea
            className="form-control display-author"
            rows="1"
            onChange={(e) => setName(e.target.value)}
            value={name}
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
