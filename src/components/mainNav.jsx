import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { useGlobalContext } from "../context";
import Command from "./Command";
function Mainnav() {
  const {
    helpFxn,
    aboutFxn,
    homeFxn,
    tab,
    poem,
    choice,
    getPoem,
    changePoem,
    capture,
    download,
    write,
    commandFxn,
    openForm,
  } = useGlobalContext();
  const location = useLocation();
  const linkTo = useNavigate();
  const route = location.pathname;
  const name = localStorage.getItem("name");
  const title = localStorage.getItem("title");
  const text = localStorage.getItem("text");
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Avatar Logo" width="100px" className="p-0" />
        </a>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span
                className={`nav-link ${tab == "Accueil" && "bordered"}`}
                onClick={homeFxn}
              >
                Accueil
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${tab == "Aide" && "bordered"}`}
                onClick={helpFxn}
              >
                Aide
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${tab == "A propos de moi" && "bordered"}`}
                onClick={aboutFxn}
              >
                A propos de moi
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${tab == "Commander" && "bordered"}`}
                onClick={commandFxn}
              >
                Commander
              </span>
            </li>
          </ul>
        </div>

        {route === "/write-poem" && (
          <div className="navbar-nav choice-fxns">
            <li className="nav-item select">
              <span className={`nav-link`} onClick={() => linkTo("/form")}>
                <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>{" "}
                Catégories
              </span>
            </li>
            <li className="nav-item select">
              <span
                className={`nav-link`}
                onClick={() => linkTo("/poem-editor")}
              >
                <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
                Appliquer
              </span>
            </li>
          </div>
        )}
        <div className="">
          {route === "/poem-editor" && (
            <div className="navbar-nav poem-fxns">
              <li className="nav-item poem-fxn1">
                <span
                  className={`nav-link`}
                  onClick={() => linkTo("/write-poem")}
                >
                  Re-modifier
                </span>
              </li>
              <li
                className="nav-item poem-fxn2"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                <span className={`nav-link`} onClick={capture}>
                  Télécharger
                </span>
              </li>
            </div>
          )}
        </div>
        <div
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon" />
        </div>
      </nav>
    </header>
  );
}
export default Mainnav;
