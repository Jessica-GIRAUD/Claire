import React from "react";
import { useForm } from "react-hook-form";
import "../style/formulaire.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Formulaire = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    lastname: "",
    firstname: "",
    email: "",
    message: "",
  });

  console.log(errors);

  /*   const onSubmit = (e) => {
    const data = JSON.stringify(watch());
    console.log("data", data);
  }; */

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "There has been an error.  Here some thoughts on the error that occured:",
          err
        )
      );
  };

  const onSubmit = (data, r) => {
    const templateId = "template_9nnppox";
    const serviceID = "service_gljx7bh";
    toast.success("Message envoyé", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("data", data);
    sendFeedback(serviceID, templateId, {
      from_name: `${data.firstname} ${data.lastname}`,
      message_html: data.message,
      reply_to: data.email,
    });
    r.target.reset();
  };

  return (
    <div className="form-container">
      <h1>Formulaire de contact</h1>
      <ToastContainer />
      <form className="formulaire" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Nom"
          {...register("lastname", {
            maxLength: 40,
            minLength: 2,
            required: true,
            pattern:
              /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/,
          })}
          style={errors.lastname ? { borderColor: "red" } : {}}
        />
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Prénom"
          {...register("firstname", {
            maxLength: 40,
            minLength: 2,
            required: true,
            pattern:
              /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/,
          })}
          style={errors.firstname ? { borderColor: "red" } : {}}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Adresse e-mail"
          {...register("email", {
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            required: true,
          })}
          style={errors.email ? { borderColor: "red" } : {}}
        />

        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Votre message..."
          {...register("message", { required: true })}
          style={errors.message ? { borderColor: "red" } : {}}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            id="conditions"
            name="conditions"
            {...register("conditions", { required: true })}
          />
          <label
            htmlFor="conditions"
            className="conditions"
            style={
              errors.conditions
                ? { color: "red", marginLeft: "10px" }
                : { marginLeft: "10px" }
            }
          >
            J'accepte que les données saisies soient utilisées à des fins de
            prise de contact.
          </label>
        </div>
        {Object.keys(errors).length > 0 && (
          <span
            style={{
              color: "red",
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            Tous les champs sont obligatoires.
          </span>
        )}
        <button className="button">Envoyer</button>
      </form>
    </div>
  );
};

export default Formulaire;
