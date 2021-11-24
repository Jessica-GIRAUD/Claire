import React from "react";
import "../style/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="social">
          <a href="#">
            <i className="icon ion-social-instagram"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-snapchat"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-twitter"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/accueil">Accueil</a>
          </li>
          <li className="list-inline-item">
            <a href="/aproposdemoi">A propos de moi</a>
          </li>
          <li className="list-inline-item">
            <a href="/cgv">CGV</a>
          </li>
          <li className="list-inline-item">
            <a href="/contact">Contact</a>
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
          with ❤️ - All rights reserved.{" "}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
