import React from "react";
import logo from "../images/Logo.png";
import "../style/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { push as Menu } from "react-burger-menu";

const HeaderNavbar = () => {
  const { pathname } = useLocation();

  const splitLocation = pathname.split("/");

  return (
    <header className="navbarCreamStyle">
      <Link to="/" style={{ width: "30%" }}>
        <img src={logo} alt="Claire Deligné" id="logo" className="logo" />
      </Link>
      <nav className="navbar">
        <ul className="navbar-list cream">
          <li
            className={
              splitLocation[1] === "" || splitLocation[1] === "accueil"
                ? "active"
                : ""
            }
          >
            <a href="/accueil">Accueil</a>
          </li>
          <li className={splitLocation[1] === "aproposdemoi" ? "active" : ""}>
            <a href="/aproposdemoi">A propos de moi</a>
          </li>
          <li className={splitLocation[1] === "sophrologie" ? "active" : ""}>
            <a href="/sophrologie">La Sophrologie</a>
          </li>{" "}
          <li className={splitLocation[1] === "seance" ? "active" : ""}>
            <a href="/seance">La Séance</a>
          </li>
          <li className={splitLocation[1] === "entreprise" ? "active" : ""}>
            <a href="/entreprise">Entreprises</a>
          </li>
          <li className={splitLocation[1] === "prestations" ? "active" : ""}>
            <a href="/prestations">Prestations</a>
          </li>
          <li className={splitLocation[1] === "contact" ? "active" : ""}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <nav className="mobile-menu">
        <Menu right>
          <ul className="navbar-list cream">
            <li
              className={
                splitLocation[1] === "" || splitLocation[1] === "accueil"
                  ? "active"
                  : ""
              }
            >
              <a href="/accueil">Accueil</a>
            </li>
            <li className={splitLocation[1] === "aproposdemoi" ? "active" : ""}>
              <a href="/aproposdemoi">A propos de moi</a>
            </li>
            <li className={splitLocation[1] === "sophrologie" ? "active" : ""}>
              <a href="/sophrologie">La Sophrologie</a>
            </li>
            <li className={splitLocation[1] === "entreprise" ? "active" : ""}>
              <a href="/entreprise">Entreprises</a>
            </li>
            <li className={splitLocation[1] === "seance" ? "active" : ""}>
              <a href="/seance">La Séance</a>
            </li>
            <li className={splitLocation[1] === "prestations" ? "active" : ""}>
              <a href="/prestations">Prestations</a>
            </li>
            <li className={splitLocation[1] === "contact" ? "active" : ""}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </Menu>
      </nav>
    </header>
  );
};

export default HeaderNavbar;
