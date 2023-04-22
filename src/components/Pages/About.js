import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./../../assets/css/About.css";
import Footer from "./Footer";
import DiapPhotos from "../DiapPhotos";

import { motion } from "framer-motion";

import pizaiolo from './../../assets/img//pizaiolo.jpg';
import livraison from './../../assets/img//livraison.jpg';


export const About = () => {

  /* Framer-motion */
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: { 
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    }
  };

  const transition = {
    ease: [.03,.87,.73,.9],
    duration: .6,
  }

  return (
    <motion.div
    className="page"
    initial = "initial"    
    animate = "visible"
    exit = "exit"
    variants = {variants}
    transition = {transition}
    >

      <h1>Pizzeria chez Mario<br />
        Pizzeria à emporter ou en livraison</h1>

      <div className="contain-presentation">
        <div className="cadre-about-image" style={{ backgroundImage: `url(${pizaiolo})` }}>
          
        </div>
        <div className="cadre-texte middle">
        <h2>Qui sommes-nous ?</h2>
        <p>
        Nous sommes installés en plein coeur de la France depuis le 3 juin 2016.<br /><br />
        Nous vous accueillons, dans un cadre agréable, tous les jours sauf le lundi, pour vous proposer nos délicieuses pizzas à emporter. <br /><br />
        Pour mieux vous satisfaire nous avons mis en place un service de livraison à domicile ou sur votre lieu de travail. <br /><br />
        Des pâtes, des boissons, et des desserts faits maison, complètent notre offre de pizzas.
        </p>
        </div>
        <div className="cadre-texte full">
            <p>
            Nous proposons des pizzas à base sauce tomate ou crème fraiche avec ou sans boisson et une pizza offerte pour 4 achetées. <br /><br />
            &#x27BA; Une pâte traditionnelle préparée chaque jour. <br /><br />
            &#x27BA; Des ingrédients frais rigoureusement sélectionnés <br /><br />
            &#x27BA; Un juste mélange  de saveurs , de textures, de couleurs et de parfums différents<br /><br />
            &#x27BA; Une cuisson authentique à l’ancienne «  AU FEU DE BOIS »<br /><br />
            </p>
        </div>
      </div>

      <div className="contain-presentation">
        <div className="cadre-texte middle">
        <h2>Commandez votre repas</h2>
        <p>
        Découvrez nos diverses pizzas à emporter ou en livraison directement chez vous<br /><br />
        Vous aurez le choix parmi l’ensemble de nos nombreuses pizzas aussi variées que gourmandes.<br /><br />
        Pour accompagner vos pizzas, nous avons des pâtes, les desserts et boissons.<br /><br />
        N’attendez plus pour commander !
        </p>
        <div className="cadre-texte center">
        <Link to="/menu"
            exact
          >
            <button className="btn btn-background-slide">03.20.00.00.00</button>
          </Link>
          </div>
        </div>
        <div className="cadre-about-image" style={{ backgroundImage: `url(${livraison})` }}>
          
        </div>
        <div className="cadre-texte full">
            <p>
            LIVRAISON A DOMICILE

            Nous proposons un service de livraison à domicile 6 jours sur 7 midi et soir sur toute la zone de Beuvry uniquement, aux horaires indiqués sur la page d'accueil du site.<br /><br />
            &#x27BA; Un espace de restauration distribué de façon contemporaine où l’on peut manger sur le pouce le long d’un comptoir de marbre noir, ou autour de grandes tables à l’italienne.<br /><br />
            &#x27BA; Nous nous engageons à vous offrir un service rapide, « souriant », sympathique<br /><br />
            &#x27BA; et la promesse d’un produit de qualité, de recettes originales dont la grande variété sera agrémentée chaque mois d’une nouvelle pizza : la pizza du mois.<br /><br />
         </p>
        </div>
      </div>

      <div className="contain-diap">
        <DiapPhotos />
      </div>
      
    <Footer />
    </motion.div>
  );
};

