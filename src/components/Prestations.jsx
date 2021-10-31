import React from "react";
import arrow from "../images/arrow.svg";
import meditation from "../images/meditation.png";
import Fade from "react-reveal/Fade";

const Prestations = () => {
  return (
    <div className="greenPage">
      <div className="container-presta">
        <Fade>
          <div className="presta-img-container">
            <img src={meditation} alt="meditation" className="meditation-img" />
          </div>
        </Fade>
        <img
          src={arrow}
          alt="arrow"
          className="vertical-arrow"
          style={{ width: "250px" }}
        />
        <div className="seance-txt-pic-container">
          <h1>Mes Prestations</h1>
          <h4>Séance individuelle - 1h</h4>
          <p> 55€</p>
          <h4>Protocole de 8 séances</h4>
          <p>370€</p>
          <h4>Séance supplémentaire protocole - 1h</h4>
          <p>45€</p>

          <p style={{ marginTop: "10%" }}>
            <b>Paiement :</b> Par chèques ou espèces
          </p>

          <p>
            <b>Remboursement :</b> Prise en charge sous condition (voir
            mutuelle)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prestations;
