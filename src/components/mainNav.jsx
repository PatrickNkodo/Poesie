import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { useGlobalContext } from "../context";
import Command from "./Command";
import "./mainNav.css";

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
        <div className="collapse navbar-collapse" id="nav">
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
