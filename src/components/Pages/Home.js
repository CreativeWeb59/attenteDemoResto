import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./../../assets/css/Home.css";
import "./../../assets/css/aos.css";
import DynamicText from "../DynamicText";
import Footer from "./Footer";
/*import "aos/dist/aos.css"*/
import Aos from "aos"
import { motion } from "framer-motion";

import background01 from './../../assets/img/fonds/fonds_01.jpg';
import background02 from './../../assets/img/fonds/fonds_02.jpg';
import background03 from './../../assets/img/fonds/fonds_03.jpg';
import background04 from './../../assets/img/fonds/fonds_04.jpg';

import imgSeparation from './../../assets/img//part_pizza.png';

import CadrePhoto1 from './../../assets/img//photo1.jpg';
import CadrePhoto2 from './../../assets/img//photo2.jpg';
import CadrePhoto3 from './../../assets/img//photo3.jpg';
import CadrePhoto4 from './../../assets/img//photo4.jpg';
import CadrePhoto5 from './../../assets/img//photo5.jpg';
import CadrePhoto6 from './../../assets/img//photo6.jpg';

import fondsEcran4 from './../../assets/img//fonds_test.jpg';
import photoPizza from './../../assets/img//photo_pizza.png';
import photoPasta from './../../assets/img//pasta.png';
import photoCake from './../../assets/img//cake_chocolates.png';
import photoDrink from './../../assets/img//drink.png';




export const Home = () => {

  const background = [
    background01,
    background02,
    background03,
    background04
];

  const [backgroundEnCours, setBackgroundEnCours] = useState(0);
  let index = 0;
  let timer = 6000;

  useEffect(() => {
    const intervalID = setInterval(() => {
      
      if (index === 3 )  {
        index = 0;
      } else {
        index ++;
      }
      setBackgroundEnCours(backgroundEnCours => index);
      
      //setBackgroundEnCours(backgroundEnCours => backgroundEnCours +1);

  }, timer)
  return () => {
    clearInterval(intervalID);
  }
},[])

  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

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
        className="page"
        initial = "initial"    
        animate = "visible"
        exit = "exit"
        variants = {variants}
        transition = {transition}
        >
        <div className="ecran ecran1" style={{ backgroundImage: `url(${background[backgroundEnCours]})` }}>
          <div id="texte1"><DynamicText /></div>
          <Link to="/menu"
            exact
          >
            <button className="btn btn-background-slide">Nos pizzas</button>
          </Link>
        </div>
        <div className="ecran ecran2">
          <div className="sectionF">
          <h1>Bienvenue chez Mario</h1>
          <h2>Pizzeria Beuvrygeoise</h2>
          <img data-aos="fade-zoom-in" src= {imgSeparation} alt="photo part de pizza"/>
          <p className="articleC"><strong>Pizzeria traditionnelle,</strong><br />
            nos pizzas sont <strong>cuites au feu de bois</strong><br />
            et réalisées avec des <strong>produits frais</strong><br />
            à <strong>Beuvry la forêt</strong> près d'Orchies,<br />
            <strong>service en salle et terrasse, vente à emporter</strong><br />
            Renseignements et réservation au 03.20.61.00.00<br />
            A bientôt<br />
            Pizzeria Chez Mario
          </p>
          </div>
        </div>
        <div className="ecran ecran3">
          <div data-aos="fade-right" className="cadrePhoto" style={{ backgroundImage: `url(${CadrePhoto1})` }}>
          </div>
          <div data-aos="fade-down" className="cadrePhoto" style={{ backgroundImage: `url(${CadrePhoto2})` }}>
          </div>
          <div data-aos="fade-left" className="cadrePhoto" style={{ backgroundImage: `url(${CadrePhoto3})` }}>
          </div>
          <div data-aos="fade-right" className="cadrePhoto" style={{ backgroundImage: `url(${CadrePhoto4})` }}>
          </div>
          <div data-aos="fade-up" className="cadrePhoto" style={{ backgroundImage: `url(${CadrePhoto5})` }}>
          </div>
          <div data-aos="fade-left" className="cadrePhoto" style={{ backgroundImage: `url(${CadrePhoto6})` }}>
          </div>
        </div>
        
        <div className="ecran ecran4" style={{ backgroundImage: `url(${fondsEcran4})` }}>
          <h2>Faites votre choix</h2>
          <div className="sectionE4">

            <div data-aos="flip-left" className="cadre">
            <NavLink
                exact
                to="/menu"
                className="lien-general"
              >
              <h3>Pizzas</h3>
              <img src= {photoPizza} alt="photo une pizza"/>
              <button className="btn btn-background-slide">Voir nos pizzas</button>
              </NavLink>
            </div>
            

            <div data-aos="flip-right" className="cadre">
            <Link
                exact
                to="/menu#pates"
                className="lien-general"
              >
              <h3>Pâtes</h3>
              <img src= {photoPasta} alt="photo de pates"/>
              <button className="btn btn-background-slide">Voir nos pâtes</button>
              </Link>
            </div>
            <div data-aos="flip-left" className="cadre">
            <Link
                exact
                to="/menu#desserts"
                className="lien-general"
              >
              <h3>Desserts</h3>
              <img src= {photoCake} alt="photo un gateaux"/>
              <button className="btn btn-background-slide">Voir les desserts</button>
              </Link>
            </div>
            <div data-aos="flip-right" className="cadre">
            <Link
                exact
                to="/menu#boissons"
                className="lien-general"
              >
              <h3>Boissons</h3>
              <img src= {photoDrink} alt="photo une boisson"/>
              <button className="btn btn-background-slide">Voir nos boisons</button>
              </Link>
            </div>
          </div>
        </div>

          <Footer />
    </motion.div>

);
};

// https://github.com/michalsnik/aos/tree/v2
// https://karac.ch/blog/animations-scroll-aos