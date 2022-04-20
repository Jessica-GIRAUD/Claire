import React, { useState } from "react";
import logo from "../images/Logo.png";
import D from "../images/D.png";
import "../style/navbar.css";
import { useLocation, useHistory } from "react-router-dom";
import { push as Menu } from "react-burger-menu";
import { HashLink as Link } from "react-router-hash-link";
import { Zoom, Fade } from "react-reveal";

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
    {
      title: "Accompagnement",
      path: "/#accompagnement",
      hashed: "#accompagnement",
    },
    { title: "La séance", path: "/#seance", hashed: "#seance" },
    { title: "Prestations", path: "/#prestations", hashed: "#prestations" },
    { title: "Contact", path: "/#contact", hashed: "#contact" },
  ];

  return (
    <header className="navbarCreamStyle">
      <Link to="/#accueil" style={{ width: "30%" }}>
        <Zoom>
          <img src={logo} alt="Claire Deligné" id="logo" className="logo" />
        </Zoom>
      </Link>

      <nav className="navbar">
        <ul className="navbar-list cream">
          {navbarItems.map(({ title, path, hashed = "" }, index) => {
            return (
              <Fade>
                <li key={index} className={hash === hashed ? "active" : ""}>
                  <Link
                    to={path}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  >
                    {title}
                  </Link>
                </li>
              </Fade>
            );
          })}

          <a
            href="https://www.doctolib.fr/sophrologue/colomiers/claire-deligne?pid=practice-231155&amp;practitioner_id=45588443&amp;speciality_id=133&amp;utm_campaign=website-button&amp;utm_source=claire-deligne-website-button&amp;utm_medium=referral&amp;utm_content=option-5&amp;utm_term=claire-deligne"
            style={{
              display: "block",
              textAlign: "center",
              backgroundColor: "#0596DE",
              color: "#ffffff",
              fontSize: "14px",
              overflow: "hidden",
              width: "300px",
              height: "40px",
              borderBottomRightRadius: "none",
              borderBottomLeftRadius: "none",
              position: "fixed",
              bottom: "0",
              right: "5px",
              zIndex: "1000",
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "4px",
              lineHeight: "40px",
            }}
            target="_blank"
            rel="noreferrer"
            data-reactroot=""
          >
            <span style={{ fontSize: "15px" }}>
              Prendre rendez-vous en ligne
            </span>
            <img
              style={{
                height: "20px",
                marginBottom: "3px",
                verticalAlign: "middle",
                width: "auto",
              }}
              src="https://pro.doctolib.fr/external_button/doctolib-white-transparent.png"
              alt="Doctolib"
            />
          </a>
        </ul>
      </nav>

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
          <a
            href="https://www.doctolib.fr/sophrologue/colomiers/claire-deligne?pid=practice-231155&amp;practitioner_id=45588443&amp;speciality_id=133&amp;utm_campaign=website-button&amp;utm_source=claire-deligne-website-button&amp;utm_medium=referral&amp;utm_content=option-5&amp;utm_term=claire-deligne"
            style={{
              backgroundColor: "rgb(5, 150, 222)",
              color: "rgb(255, 255, 255)",
              borderRadius: "4px",
              outline: "0",
              textDecoration: "none",
            }}
            target="_blank"
            rel="noreferrer"
          >
            <span style={{ fontSize: "18px" }}>
              Prendre rendez-vous en ligne
            </span>
            <img
              style={{
                height: "35px",
                width: "auto",
              }}
              src="https://pro.doctolib.fr/external_button/doctolib-white-transparent.png"
              alt="Doctolib"
            />
          </a>
        </Menu>
        <a
          href="https://www.doctolib.fr/sophrologue/colomiers/claire-deligne?pid=practice-231155&amp;practitioner_id=45588443&amp;speciality_id=133&amp;utm_campaign=website-button&amp;utm_source=claire-deligne-website-button&amp;utm_medium=referral&amp;utm_content=option-5&amp;utm_term=claire-deligne"
          target="_blank"
          rel="noreferrer"
        >
          {/*  <img src={Doctolib} alt="Doctolib" className="doctolib" /> */}
          <img src={D} alt="Doctolib" className="doctolib" />
        </a>
      </nav>
    </header>
  );
};

export default HeaderNavbar;
