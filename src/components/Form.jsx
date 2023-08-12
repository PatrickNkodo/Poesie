import { useGlobalContext } from "../context";
import React, { useEffect, useRef } from "react";
import categories from "../categories";
import { useNavigate } from "react-router";
const Form = () => {
  const {
    name,
    category,
    setName,
    setCategory,
    prevent,
    getPoem,
    getChoice,
    composition,
    setComposition,
    what,
    setWhat,
  } = useGlobalContext();
  const linkTo = useNavigate();
  return (
    <div>
      <h3>Veillez remplir les champs ci-dessous</h3>
      <form onSubmit={getChoice}>
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
          required
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
            required
          >
            <option value="">Veillez faire un choix</option>
            <option value="poem">Poème</option>
            <option value="quote">Citation</option>
          </select>
        </div>

        {what == "poem" && (
          <React.Fragment>
            <label htmlFor="">Catégorie du poème</label>
            <select
              name=""
              id=""
              className="form-control"
              placeholder="Choose"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              required
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
        {what == "quote" && (
          <React.Fragment>
            <label htmlFor="">Catégorie de la Citation</label>
            <select
              name=""
              id=""
              className="form-control"
              placeholder="Choose"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              required
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
          <button
            type="submit"
            className="btn btn-primary mt-2"
            onClick={() => linkTo("/write-poem")}
          >
            {what == "poem" ? "Ecrire le poème" : "Ecrire la Citation"}
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
