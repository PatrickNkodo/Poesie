import React from "react";
import { useNavigate } from "react-router";
import "./welcome.css";
const Welcome = () => {
  const linkTo = useNavigate();

  return (
    <div className="welcome">
      <div className="col-lg-10 col-md-10 col-sm-12">
        <h4>Bienvenu(e) à vous!</h4>
        <p>
          Content de vous voir ici. Sentez-vous à laise ici. Le monde de la
          poésie est à nous pendant ce petit momment passé ensemble. Cliquez sur
          Continuer pour passer à la prochaine étape. Il y'a bien un poème chez
          moi qui te remuera des souvenirs😊.
        </p>
        <button className="btn btn-primary" onClick={() => linkTo("/form")}>
          Continuer
        </button>
      </div>
    </div>
  );
};

export default Welcome;
