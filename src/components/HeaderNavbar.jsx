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

  // state for navbar
  const [isOpen, setOpen] = useState(false);

  // handle open for menu burger
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  // handle close for menu burger
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

  const navbarItems = [
    { title: "Accueil", path: "/#accueil", hashed: "#accueil" },
    {
      title: "A propos de moi",
      path: "/#aproposdemoi",
      hashed: "#aproposdemoi",
    },
    { title: "La Sophrologie", path: "/#sophrologie", hashed: "#sophrologie" },
    { title: "La séance", path: "/#seance", hashed: "#seance" },
    { title: "Entreprises", path: "/#entreprises", hashed: "#entreprises" },
    { title: "Prestations", path: "/#prestations", hashed: "#prestations" },
    { title: "Contact", path: "/#contact", hashed: "#contact" },
  ];

  return (
    <header className="navbarCreamStyle">
      <Link to="/#accueil" style={{ width: "30%" }}>
        <img src={logo} alt="Claire Deligné" id="logo" className="logo" />
      </Link>
      <Fade>
        <nav className="navbar">
          <ul className="navbar-list cream">
            {navbarItems.map(({ title, path, hashed = "" }, index) => {
              return (
                <li key={index} className={hash === hashed ? "active" : ""}>
                  <Link to={path}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Fade>

      <nav className="mobile-menu">
        <Menu
          right
          isOpen={isOpen}
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
        >
          <ul className="navbar-list cream">
            {navbarItems.map(({ title, path, hashed = "" }, index) => {
              return (
                <li
                  key={index}
                  className={hash === hashed ? "active" : ""}
                  onClick={closeSideBar}
                >
                  <Link to={path}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </Menu>
      </nav>
    </header>
  );
};

export default HeaderNavbar;
