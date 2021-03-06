import React from "react";
import Slide from "react-reveal/Slide";
import phone from "../images/appel-telephonique.png";
import email from "../images/enveloppe.png";

const Contact = () => {
  return (
    <div className="creamPage">
      <div className="container-contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1444.6032462632431!2d1.31925703769869!3d43.60224199637706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeb1b035c07729%3A0x37f63e8c76c8a85d!2s12%20Av.%20du%20Louron%2C%2031770%20Colomiers!5e0!3m2!1sfr!2sfr!4v1635007898055!5m2!1sfr!2sfr"
          style={{
            allowfullscreen: "",
            loading: "lazy",
          }}
          className="iframe"
          title="marot"
        />

        <div className="container-adresse">
          <Slide top>
            {" "}
            <h1>Contact</h1>{" "}
          </Slide>
          <h4>Horaires d'ouverture</h4>
          <p>
            Du Lundi au Vendredi de 9h à 18h <br />
            Fermé le mercredi
          </p>
          <h4>Adresse</h4>

          <a href="waze://?q=12+avenue+du+Louron+31770+Colomiers+France">
            <p>
              Centre Médical des Marots <br />
              12 Avenue du Louron <br />
              31770 COLOMIERS
            </p>
          </a>

          <p style={{ fontStyle: "italic", fontSize: "medium" }}>
            Places de parking disponibles
          </p>

          <div className="contact-container">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={email}
                alt="email"
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "10px",
                  alignItems: "center  ",
                }}
              />
              <a href="mailto: deligne.c@gmail.com">
                <p>deligne.c@gmail.com</p>
              </a>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <img
                src={phone}
                alt="telephone"
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "10px",
                  alignItems: "center  ",
                }}
              />
              <a href="tel:+3360000000">
                <p>06 XX XX XX XX</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1635688825">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Contact;
