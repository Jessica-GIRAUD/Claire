import React from "react";
import tiare from "../images/tiare.png";
import Slide from "react-reveal/Slide";

const Prestations = () => {
  return (
    <div className="greenPage">
      <div className="container-presta">
        <Slide top>
          <h1>Prestations</h1>
        </Slide>
        <div className="wrapper-type">
          <div className="presta-adultes">
            <h3 className="presta-type">Adultes</h3>
          </div>

          <div className="presta-img-container"></div>

          <div className="presta-adultes2">
            <h3 className="presta-type-enfants">
              Enfants{" "}
              <span
                style={{
                  fontSize: "70%",
                  fontStyle: "italic",
                  color: "dimgray",
                }}
              >
                jusqu'à 11 ans
              </span>
            </h3>
          </div>
        </div>
        <div className="wrapper">
          <Slide left>
            <div className="presta-adultes">
              <div className="prices-container">
                <h4>Séance individuelle - 1h</h4>
                <p> 55€</p>
              </div>

              <div className="prices-container">
                <h4>Protocole personnalisé de 8 séances</h4>
                <p> 380€</p>
              </div>

              <div className="prices-container">
                <h4> Séance supplémentaire protocole - 1h</h4>
                <p> 45€</p>
              </div>
            </div>
          </Slide>

          <div className="presta-img-container">
            <img src={tiare} alt="tiare" className="tiare-img" />
          </div>

          <div className="wrapper-type-mobile">
            <h3 className="presta-type-enfants-mobile">
              Enfants{" "}
              <span
                style={{
                  fontSize: "70%",
                  fontStyle: "italic",
                  color: "dimgray",
                }}
              >
                jusqu'à 11 ans
              </span>
            </h3>
          </div>
          <Slide right>
            <div className="presta-adultes">
              <div className="prices-container">
                <h4>Séance individuelle - 1h</h4>
                <p> 55€</p>
              </div>

              <div className="prices-container">
                <h4>Protocole personnalisé de 8 séances</h4>
                <p> 380€</p>
              </div>

              <div className="prices-container">
                <h4> Séance supplémentaire protocole - 1h</h4>
                <p> 45€</p>
              </div>
            </div>
          </Slide>
        </div>

        <Slide bottom>
          <div className="wrapper-type-entreprise">
            <h3 className="presta-type">Entreprises</h3>{" "}
          </div>
          <div className="prices-container alone">
            <h4> Séance en groupe </h4>
            <p style={{ fontSize: "20px" }}> Sur devis</p>
          </div>
        </Slide>

        <div className="paiement">
          <p>
            <strong>Paiement :</strong> par chèques ou espèces
          </p>
          <p className="p-display">-</p>
          <p>
            <strong>Remboursement : </strong>
            Prise en charge sous condition (voir mutuelle).
          </p>
        </div>
        <Slide delay={500} bottom>
          <div>
            <h3 className="deontologie">
              Je suis soumise au code de déontologie de la sophrologie et au
              secret professionnel.
            </h3>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Prestations;
