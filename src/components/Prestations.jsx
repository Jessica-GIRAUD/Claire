import React from "react";
import tiare from "../images/tiare.png";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Prestations = () => {
  return (
    <div className="greenPage">
      <div className="container-presta">
        <h1>Prestations</h1>

        <div className="wrapper">
          <div className="presta-adultes">
            <h3 className="presta-type">Adultes</h3>

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

          <Fade delay={200}>
            <div className="presta-img-container">
              <img src={tiare} alt="tiare" className="tiare-img" />
            </div>
          </Fade>

          <div className="presta-adultes">
            <h3 className="presta-type">
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
        </div>

        <div className="prices-container alone">
          <h4> Séance en entreprise </h4>
          <p style={{ fontSize: "20px" }}> Sur devis</p>
        </div>

        <div className="paiement">
          <p>
            {" "}
            <strong>Paiement :</strong> par chèques ou espèces
          </p>
          <p>-</p>
          <p>
            {" "}
            <strong>Remboursement : </strong>
            Prise en charge sous condition (voir mutuelle).
          </p>
        </div>
        <Slide delay={500} bottom>
          <div>
            <h3 style={{ marginBottom: "40px" }}>
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
