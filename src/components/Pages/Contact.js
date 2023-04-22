import React from "react";
import Footer from "./Footer";
import "./../../assets/css/Contact.css";
import ContactForm from "../ContactForm";
import { motion } from "framer-motion";


export const Contact = () => {

  /* Framer-motion */
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: { 
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    }
  };

  const transition = {
    ease: [.03,.87,.73,.9],
    duration: .6,
  }

  return (
    <motion.div
      className="pageC"
      initial = "initial"    
      animate = "visible"
      exit = "exit"
      variants = {variants}
      transition = {transition}
      >
      <h1>Nous contacter</h1>
      <div className="cadre1">
        <div className="cadre-form">
          <ContactForm />
        </div>
        <div className="cadre-carte">
        {/* <iframe className="carte-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.548279127222!2d5.691385915927878!3d45.175996460648015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af342130b2edd%3A0x7b1033135cb9d9c2!2s12%20Rue%20de%20la%20Fauconni%C3%A8re%2C%2038170%20Seyssinet-Pariset!5e0!3m2!1sfr!2sfr!4v1631180484840!5m2!1sfr!2sfr" loading="lazy"></iframe> */}
        </div>
      </div>
    
      <div className="cadre2">
        <div className="horaire">
           <h3>Adresse</h3>
           <span className="fontAwe">
            <i className="fas fa-map-marker-alt" ></i>
           </span>
           <p>
              150 rue des roses <br />59500 DOUAI
           </p>
        </div>
        <div className="horaire">
          <h3>Téléphone</h3>
          <span className="fontAwe">
          <i className="fas fa-phone"></i>
          </span>
          <p>
              03.20.31.31.00 <br />03.20.31.31.00
           </p>
        </div>
        <div className="horaire">
          <h3>Horaires d'ouverture</h3>
          <span className="fontAwe">
          <i className="far fa-clock"></i>
          </span>
          <p>
            Du mardi au dimanche<br />
            de 11h30 à 14h00<br />
            et de 18h30 - 23h30<br />
            <br />
            Fermé le lundi
          </p>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};