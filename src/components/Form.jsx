// import { useGlobalContext } from "../context";
import React, { useEffect, useState } from "react";
import categories from "../categories";
import { useNavigate } from "react-router";
import "./form.css";
const Form = () => {
  const [what, setWhat] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [composition, setComposition] = useState("help");
  const linkTo = useNavigate();
  const sumbitForm = (e) => {
    e.preventDefault();
    if (!(name && category && composition && what)) {
      alert("Veillez remplir tous les champs s'il vous plaît");
      return;
    }
    //User should write the quote in the write-alone editor instead of the help-editor
    if (what == "quote") {
      setComposition("alone");
    }
    localStorage.setItem("name", name);
    localStorage.setItem("what", what);
    localStorage.setItem("category", category);
    localStorage.setItem("composition", composition);
    linkTo("/write-poem");
  };
  console.log(name);
  useEffect(() => {
    const nameFromLocalStorage = localStorage.getItem("name");
    const whatFromLocalStorage = localStorage.getItem("what");
    const categoryFromLocalStorage = localStorage.getItem("category");
    const compositionFromLocalStorage = localStorage.getItem("composition");

    if (nameFromLocalStorage) {
      setName(nameFromLocalStorage);
    }

    if (whatFromLocalStorage) {
      setWhat(whatFromLocalStorage);
    }

    if (categoryFromLocalStorage) {
      setCategory(categoryFromLocalStorage);
    }

    if (compositionFromLocalStorage) {
      setComposition(compositionFromLocalStorage);
    }
  }, []);
  return (
    <div className="form">
      <div>
        <h3>Veillez remplir les champs ci-dessous</h3>
        <form>
          <label htmlFor="Your Name">
            Votre Nom
            <span>(Ce nom figurera comme étant l'auteur de vos oeuvres)</span>
          </label>
          <input
            type="text"
            autoFocus
            className="form-control"
            placeholder="Entrez votre nom"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <div className="form-group">
            <label htmlFor="">Que voulez-vous écrire</label>
            <br />
            <select
              name=""
              id=""
              className="form-control"
              onChange={(e) => setWhat(e.target.value)}
              value={what}
            >
              <option value="">Veillez faire un choix</option>
              <option value="poem">Poème</option>
              <option value="quote">Citation</option>
            </select>
          </div>

          {what === "poem" && (
            <React.Fragment>
              <label htmlFor="">Catégorie du poème</label>
              <select
                name=""
                id=""
                className="form-control"
                placeholder="Choose"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="">Veillez faire un choix...</option>
                {categories.map((x, i) => {
                  return (
                    <option key={i} value={x.category}>
                      {x.category}
                    </option>
                  );
                })}
              </select>
              <div className="form-group">
                <label htmlFor="">Composition du poème</label>
                <br />
                <select
                  name=""
                  id=""
                  className="form-control"
                  onChange={(e) => setComposition(e.target.value)}
                  value={composition}
                >
                  <option value="help">Modifier les poèmes intégrés</option>
                  <option value="alone">Ecrire tout seul</option>
                </select>
              </div>
            </React.Fragment>
          )}
          {what === "quote" && (
            <React.Fragment>
              <label htmlFor="">Catégorie de la Citation</label>
              <select
                name=""
                id=""
                className="form-control"
                placeholder="Choose"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="">Veillez faire un choix...</option>
                {categories.map((x, i) => {
                  return (
                    <option key={i} value={x.category}>
                      {x.category}
                    </option>
                  );
                })}
              </select>
            </React.Fragment>
          )}

          {what && (
            <div className="submit-btn flex end">
              <button
                type="submit"
                className="btn btn-primary mt-2"
                onClick={sumbitForm}
              >
                {what === "poem" ? "Ecrire le poème" : "Ecrire la Citation"}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
