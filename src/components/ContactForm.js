import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameS = document.getElementById("name");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".form-message");

    const isEmail = () => {
      let isMail = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    if (name && isEmail() && message) {
      const templateId = "template_q59wzix";

      nameS.classList.remove("red");
      emailS.classList.remove("red");
      messageS.classList.remove("red");

      sendFeedback(templateId, {
        name,
        phone,
        email,
        message,
      });
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.opacity = "1";
      formMess.style.color="white";
      formMess.style.textAlign="center";

      if (!name) {
        nameS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  };

  const sendFeedback = (templateId, variables) => {
    let formMess = document.querySelector(".form-message");

    window.emailjs
      .send("service_yasjqvw", templateId, variables)
      .then((res) => {
        formMess.innerHTML =
          "Message envoyé ! Nous vous recontacterons dès que possible.";
        formMess.style.background = "#00c1ec";
        formMess.style.opacity = "1";
        formMess.style.color="white";
        formMess.style.textAlign="center";

        document.getElementById("name").classList.remove("error");
        document.getElementById("email").classList.remove("error");
        document.getElementById("message").classList.remove("error");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          formMess.style.opacity = "0";
        }, 5000);
      })
      .catch(
        (err) =>
          (formMess.innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      );
  };

  return (
    <form className="contact-form">
      <div className="form-content">
        <div class="group">
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Votre nom * :</label>
        </div>

        <div class="group">
        <input
            type="text"
            id="phone"
            name="phone"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Votre numéro de téléphone * :</label>
        </div>

        <div class="group">
        <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Votre email * :</label>
        </div>

        <div class="paper">
          <div class="paper-content">
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Votre message"
              required
            />
          </div>
          </div>


      <input
        className="hover-center-1" /*btnForm btn-background-circle"*/
        type="submit"
        value="Envoyer"
        onClick={handleSubmit}
      />
      </div>
      <div className="form-message"></div>
    </form>
  );
};

export default ContactForm;


  {/* <label for="name">Votre nom * : </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="nom"
          value={name}
        />
        <label for="phone">Votre numéro de téléphone : </label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
          <label id="not-mail">Email non valide</label>
          <label for="email">Votre email * : </label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            value={email}
          />
                      <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
          <label for="message">Votre message * : </label>
          */}