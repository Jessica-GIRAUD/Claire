import React from "react";
import "../style/footer.css";
import coeur from "../images/coeur.png";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="social">
          <a
            href="https://www.instagram.com/claire.deligne_sophro/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon ion-social-instagram"></i>
          </a>
          <a
            href="https://m.facebook.com/Claire-Delign%C3%A9-Sophrologue-%C3%A0-Colomiers-104229912097347/?_rdr"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/#accueil">Accueil</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/#aproposdemoi">A propos de moi</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/mentionslegales">Mentions légales</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
        <p className="copyright">
          {" "}
          © 2021 -{" "}
          <a
            href="https://www.linkedin.com/in/jessica-giraud-31031989/"
            target="_blank"
            rel="noreferrer"
          >
            Jessica GIRAUD{" "}
          </a>
          with <img src={coeur} alt="coeur" style={{ width: "10px" }} /> - All
          rights reserved.{" "}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
