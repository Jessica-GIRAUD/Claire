import React from "react";
import logoLight from "../images/logoLight.png";
import logoDark from "../images/logoDark.png";
import "../style/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { push as Menu } from "react-burger-menu";

const HeaderNavbar = () => {
  const { pathname } = useLocation();

  const path = pathname === "/prestations" || pathname === "/sophrologie";
  const splitLocation = pathname.split("/");

  return (
    <header className={path ? "navbarGreenStyle" : "navbarCreamStyle"}>
      <Link to="/">
        <img
          src={path ? logoDark : logoLight}
          alt="Claire Deligné"
          id="logo"
          className="logo"
        />
      </Link>
      <nav className="navbar">
        <ul className={path ? "navbar-list cream" : "navbar-list green"}>
          <li className={splitLocation[1] === "about" ? "active" : ""}>
            <a href="/about">Qui suis-je ?</a>
          </li>
          <li className={splitLocation[1] === "sophrologie" ? "active" : ""}>
            <a href="/sophrologie">Pourquoi la Sophrologie ?</a>
          </li>
          <li className={splitLocation[1] === "seance" ? "active" : ""}>
            <a href="/seance">La Séance</a>
          </li>
          <li className={splitLocation[1] === "prestations" ? "active" : ""}>
            <a href="/prestations">Mes Prestations</a>
          </li>
          <li className={splitLocation[1] === "contact" ? "active" : ""}>
            <a href="/contact">Me Contacter</a>
          </li>
        </ul>
      </nav>

      <nav className="mobile-menu">
        <Menu right>
          <ul className={path ? "navbar-list cream" : "navbar-list green"}>
            <li className={splitLocation[1] === "about" ? "active" : ""}>
              <a href="/about">Qui suis-je ?</a>
            </li>
            <li className={splitLocation[1] === "sophrologie" ? "active" : ""}>
              <a href="/sophrologie">Pourquoi la Sophrologie ?</a>
            </li>
            <li className={splitLocation[1] === "seance" ? "active" : ""}>
              <a href="/seance">La Séance</a>
            </li>
            <li className={splitLocation[1] === "prestations" ? "active" : ""}>
              <a href="/prestations">Mes Prestations</a>
            </li>
            <li className={splitLocation[1] === "contact" ? "active" : ""}>
              <a href="/contact">Me Contacter</a>
            </li>
          </ul>
        </Menu>
      </nav>
    </header>
  );
};

export default HeaderNavbar;
