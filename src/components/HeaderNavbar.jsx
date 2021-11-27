import React, { useState } from "react";
import logo from "../images/Logo.png";
import "../style/navbar.css";
import { useLocation, useHistory } from "react-router-dom";
import { push as Menu } from "react-burger-menu";
import { HashLink as Link } from "react-router-hash-link";
import { Fade } from "react-reveal";

const HeaderNavbar = () => {
  const { hash } = useLocation();
  const history = useHistory();

  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  // change url while scrolling
  window.addEventListener("load", () => {
    const sections = document.querySelectorAll("section");
    const accueilSection = document.getElementById("accueil");
    const titleId = document.getElementById("title");
    document.addEventListener("scroll", (e) => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const rectAccueil = titleId.getBoundingClientRect();
        if (rect.top > 0 && rect.top < 150) {
          history.push("#" + section.id);
        }
        if (rectAccueil.top > 0 && rectAccueil.top < 150) {
          history.push("#" + accueilSection.id);
        }
      });
    });
  });
  return (
    <Fade>
      <header className="navbarCreamStyle">
        <Link to="/#accueil" style={{ width: "30%" }}>
          <img src={logo} alt="Claire Deligné" id="logo" className="logo" />
        </Link>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className={hash === "" || hash === "#accueil" ? "active" : ""}>
              <Link to="/#accueil">Accueil</Link>
            </li>
            <li className={hash === "#aproposdemoi" ? "active" : ""}>
              <Link to="/#aproposdemoi">A propos de moi</Link>
            </li>
            <li className={hash === "#sophrologie" ? "active" : ""}>
              <Link to="/#sophrologie">La Sophrologie</Link>
            </li>
            <li className={hash === "#seance" ? "active" : ""}>
              <Link to="/#seance">La Séance</Link>
            </li>
            <li className={hash === "#entreprises" ? "active" : ""}>
              <Link to="/#entreprises">Entreprises</Link>
            </li>
            <li className={hash === "#prestations" ? "active" : ""}>
              <Link to="/#prestations">Prestations</Link>
            </li>
            <li className={hash === "#contact" ? "active" : ""}>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <nav className="mobile-menu">
          <Menu
            right
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
          >
            <ul className="navbar-list">
              <li
                className={hash === "" || hash === "#accueil" ? "active" : ""}
                onClick={closeSideBar}
              >
                <Link to="/#accueil">Accueil</Link>
              </li>
              <li
                className={hash === "#aproposdemoi" ? "active" : ""}
                onClick={closeSideBar}
              >
                <Link to="/#aproposdemoi">A propos de moi</Link>
              </li>
              <li
                className={hash === "#sophrologie" ? "active" : ""}
                onClick={closeSideBar}
              >
                <Link to="/#sophrologie">La Sophrologie</Link>
              </li>
              <li onClick={closeSideBar}>
                <Link to="/#seance">La Séance</Link>
              </li>
              <li
                className={hash === "#entreprises" ? "active" : ""}
                onClick={closeSideBar}
              >
                <Link to="/#entreprises">Entreprises</Link>
              </li>
              <li
                className={hash === "#prestations" ? "active" : ""}
                onClick={closeSideBar}
              >
                <Link to="/#prestations">Prestations</Link>
              </li>
              <li
                className={hash === "#contact" ? "active" : ""}
                onClick={closeSideBar}
              >
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </Menu>
        </nav>
      </header>
    </Fade>
  );
};

export default HeaderNavbar;
