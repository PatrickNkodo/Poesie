import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { useGlobalContext } from "../context";
import Command from "./Command";
import "./mainNav.css";

function Mainnav() {
  const location = useLocation();
  const linkTo = useNavigate();
  const route = location.pathname;

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <img
          src={logo}
          alt="Avatar Logo"
          width="100px"
          className="p-0"
          onClick={() => linkTo("/about")}
        />
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span
                className={`nav-link ${route == "/" && "bordered"}`}
                onClick={() => linkTo("/")}
              >
                Accueil
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${route == "/help" && "bordered"}`}
                onClick={() => linkTo("/help")}
              >
                Aide
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${route == "/about" && "bordered"}`}
                onClick={() => linkTo("/about")}
              >
                A propos de moi
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${route == "/command" && "bordered"}`}
                onClick={() => linkTo("/command")}
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
