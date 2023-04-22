import React, { useEffect } from "react";
import { Route, Switch, useLocation } from 'react-router-dom'
import Footer from "./Footer";
import Aos from "aos"
import Project from "../Project";

import "./../../assets/css/Menu.css";

import Pizza1 from './../../assets/img/pizza1.png';
import Pizza2 from './../../assets/img/pizza2.png';
import Pizza3 from './../../assets/img/pizza3.png';

export const Menu = () => {

    useEffect(() => {
      Aos.init({ duration: 2000});
    }, []);

    const { pathname, hash } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname]); // do this on route change


  return (
    <div className="page-tarifs">
      <h1>Les tarifs</h1>
      <h2>Pizzas à Base de tomate</h2>
      <div className="contain-tarif-Pizza">
          {/* Carte debut 1 */}
            <div data-aos="fade-right" className="cardAbout">
              <div className="hCard tomate">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza1})` }}></div>
                </div>
                <h3>MARGUERITA</h3>
                <p>
                  Sauce tomate, double mozzarella<br />
                  9.70 €
                </p>
            </div>
          {/* Carte fin */}

          {/* Carte debut 1 */}
            <div data-aos="fade-right" className="cardAbout">
            <div className="hCard tomate">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza2})` }}></div>
                </div>
                <h3>4 SAISONS</h3>
                <p>
                Accompagnement des 4 saisons<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}
           {/* Carte debut 1 */}
                    <div data-aos="fade-right" className="cardAbout">
                    <div className="hCard tomate">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza3})` }}></div>
                </div>
                <h3>SICILIENNE</h3>
                <p>
                Sauce tomate, mozzarella, chorizo, anchois, poivrons, olives noires, huile à l’ail maison<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}

            {/* Carte debut 1 */}
                    <div data-aos="fade-right" className="cardAbout">
                    <div className="hCard tomate">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza3})` }}></div>
                </div>
                <h3>SICILIENNE</h3>
                <p>
                Sauce tomate, mozzarella, chorizo, anchois, poivrons, olives noires, huile à l’ail maison<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}

          {/* Carte debut 1 */}
                    <div data-aos="fade-right" className="cardAbout">
                    <div className="hCard tomate">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza3})` }}></div>
                </div>
                <h3>SICILIENNE</h3>
                <p>
                Sauce tomate, mozzarella, chorizo, anchois, poivrons, olives noires, huile à l’ail maison<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}

                    {/* Carte debut 1 */}
                    <div data-aos="fade-right" className="cardAbout">
                    <div className="hCard tomate">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza3})` }}></div>
                </div>
                <h3>SICILIENNE</h3>
                <p>
                Sauce tomate, mozzarella, chorizo, anchois, poivrons, olives noires, huile à l’ail maison<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}

                              {/* Carte debut 1 */}
                              <div data-aos="fade-right" className="cardAbout">
                              <div className="hCard tomate">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza3})` }}></div>
                </div>
                <h3>SICILIENNE</h3>
                <p>
                Sauce tomate, mozzarella, chorizo, anchois, poivrons, olives noires, huile à l’ail maison<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}

                              {/* Carte debut 1 */}
                              <div data-aos="fade-right" className="cardAbout">
                              <div className="hCard tomate">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza3})` }}></div>
                </div>
                <h3>SICILIENNE</h3>
                <p>
                Sauce tomate, mozzarella, chorizo, anchois, poivrons, olives noires, huile à l’ail maison<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}
      </div>
      <div className="lien-ancre" id="pizza-creme"></div>
{/* Fin base tomate */}
      <h2>Pizzas à Base de crème fraîche</h2>
      <div className="contain-tarif-Pizza">
          {/* Carte debut 1 */}
            <div data-aos="fade-right" className="cardAbout">
              <div className="hCard creme">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza1})` }}></div>
                </div>
                <h3>MARGUERITA</h3>
                <p>
                  Sauce tomate, double mozzarella<br />
                  9.70 €
                </p>
            </div>
          {/* Carte fin */}

          {/* Carte debut 1 */}
            <div data-aos="fade-right" className="cardAbout">
            <div className="hCard creme">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza2})` }}></div>
                </div>
                <h3>4 SAISONS</h3>
                <p>
                Accompagnement des 4 saisons<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}
           {/* Carte debut 1 */}
                    <div data-aos="fade-right" className="cardAbout">
                    <div className="hCard creme">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza3})` }}></div>
                </div>
                <h3>SICILIENNE</h3>
                <p>
                Sauce tomate, mozzarella, chorizo, anchois, poivrons, olives noires, huile à l’ail maison<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}

            {/* Carte debut 1 */}
                    <div data-aos="fade-right" className="cardAbout">
                    <div className="hCard creme">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza3})` }}></div>
                </div>
                <h3>SICILIENNE</h3>
                <p>
                Sauce tomate, mozzarella, chorizo, anchois, poivrons, olives noires, huile à l’ail maison<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}

          {/* Carte debut 1 */}
                    <div data-aos="fade-right" className="cardAbout">
                    <div className="hCard creme">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza3})` }}></div>
                </div>
                <h3>SICILIENNE</h3>
                <p>
                Sauce tomate, mozzarella, chorizo, anchois, poivrons, olives noires, huile à l’ail maison<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}

                    {/* Carte debut 1 */}
                    <div data-aos="fade-right" className="cardAbout">
                    <div className="hCard creme">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza3})` }}></div>
                </div>
                <h3>SICILIENNE</h3>
                <p>
                Sauce tomate, mozzarella, chorizo, anchois, poivrons, olives noires, huile à l’ail maison<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}

          {/* Carte debut 1 */}
                <div data-aos="fade-right" className="cardAbout">
                <div className="hCard creme">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza3})` }}></div>
                </div>
                <h3>SICILIENNE</h3>
                <p>
                Sauce tomate, mozzarella, chorizo, anchois, poivrons, olives noires, huile à l’ail maison<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}

              {/* Carte debut 1 */}
              <div data-aos="fade-right" className="cardAbout">
              <div className="hCard creme">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza3})` }}></div>
                </div>
                <h3>SICILIENNE</h3>
                <p>
                Sauce tomate, mozzarella, chorizo, anchois, poivrons, olives noires, huile à l’ail maison<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}
      </div>
      {/* Fin base */}
      <div className="lien-ancre" id="specialites"></div>
{/* Specialites */}
<h2>Nos spécialités</h2>
      <div className="contain-tarif-Pizza">
          {/* Carte debut 1 */}
            <div data-aos="fade-right" className="cardAbout">
              <div className="hCard tomate">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza1})` }}></div>
                </div>
                <h3>MARGUERITA</h3>
                <p>
                  Sauce tomate, double mozzarella<br />
                  9.70 €
                </p>
            </div>
          {/* Carte fin */}

          {/* Carte debut 1 */}
            <div data-aos="fade-right" className="cardAbout">
            <div className="hCard tomate">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza2})` }}></div>
                </div>
                <h3>4 SAISONS</h3>
                <p>
                Accompagnement des 4 saisons<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}

                    {/* Carte debut 1 */}
                    <div data-aos="fade-right" className="cardAbout">
            <div className="hCard tomate">
                <div className="cardCercle" style={{ backgroundImage: `url(${Pizza2})` }}></div>
                </div>
                <h3>4 SAISONS</h3>
                <p>
                Accompagnement des 4 saisons<br />
                  9.90 €
                </p>
            </div>
          {/* Carte fin */}
          </div>
{/* Specialites fin */}
      <div className="lien-ancre" id="pates"></div>
      <div className="contain-menu">
        {/* Page Gauche */}
        <div className="page-menu">
          <div className="contain-titre-menu">
            <div className="titre-menu h5-background-slide">NOS PÂTES</div>
          </div>
          {/* partie gauche */}
          <ul className="leaders vignets">
            <li>
              <span>Saumon</span>
              <span>11.00 €</span>
            </li>
            <li>
              <span>Carbonara</span>
              <span>9.00 €</span>
            </li>
            <li>
              <span>Poulet, curry</span>
              <span>11.00 €</span>
            </li>
            <li>
              <span>Scampis</span>
              <span>12.30 €</span>
            </li>
            <li>
              <span>Poulet, crème, champignons</span>
              <span>11.00 €</span>
            </li>
          </ul>

        {/* partie droite */}
        <ul className="leaders vignets">
            <li>
              <span>Bolognaise</span>
              <span>7.95 €</span>
            </li>
            <li>
              <span>Jambon, crème</span>
              <span>9.50 €</span>
            </li>
            <li>
              <span>Carbonara</span>
              <span>9.50 €</span>
            </li>
            <li>
              <span>4 fromages</span>
              <span>9.30 €</span>
            </li>
            <li>
              <span>Napolitaine</span>
              <span>11.00 €</span>
            </li>
          </ul>

{/* 2ème partie */}
            <div className="contain-titre-menu">
              <div className="titre-menu h5-background-slide">MENU ENFANTS : 7.50  €</div>
          </div>
          
          {/* partie gauche */}
          <p>
              1 pizza junior (au choix : Bolognaise/Marguerita/Jambon) ou penne (au choix : Carbonara, Bolognaise, Jambon crème)<br />
              + 1 danette (Vanille ou Chocolat) ou compote<br />
              + 1 capri-sun<br />
              + 1 jouet (fille ou garçon)
          </p>

          <div className="lien-ancre" id="boissons"></div>
{/* Les boissons */}
          <div className="contain-titre-menu">
              <div className="titre-menu h5-background-slide">LES BOISSONS</div>
          </div>
          {/* partie gauche */}
          <ul className="leaders vignets">
          <h5>Nos boissons soft</h5>
            <li>
              <span>Coca-cola</span>
              <span>1.20 €</span>
            </li>
            <li>
              <span>Oasis tropical</span>
              <span>1.10 €</span>
            </li>
            <li>
              <span>Ice tea</span>
              <span>1.10 €</span>
            </li>
            <li>
              <span>Fanta</span>
              <span>1.30 €</span>
            </li>
            <li>
              <span>Bouteille d’eau 50cl</span>
              <span>0.80 €</span>
            </li>
          </ul>
            {/* partie droite */}
          {/* partie gauche */}
          <ul className="leaders vignets">
          <h5>Les bières</h5>
            <li>
              <span>Bière blonde locale et bio  (33cl)</span>
              <span>3.80 €</span>
            </li>
            <li>
              <span>bière triple locale et bio (33cl)</span>
              <span>3.80 €</span>
            </li>
            <li>
              <span>Desperados (33cl)</span>
              <span>3.60 €</span>
            </li>
            <li>
              <span>Stella Artois (33cl)</span>
              <span>3.50 €</span>
            </li>
            <li>
              <span>Paix dieu (75cl)</span>
              <span>9.20 €</span>
            </li>
          </ul>

          <div className="lien-ancre" id="desserts"></div>
{/* Les desserts */}
<div className="contain-titre-menu">
              <div className="titre-menu h5-background-slide">LES DESSERTS</div>
          </div>
          {/* partie gauche */}
          <ul className="leaders vignets">
            <li>
              <span>Tiramisu maison</span>
              <span>4.50 €</span>
            </li>
            <li>
              <span>Mousse au chocolat</span>
              <span>4.80 €</span>
            </li>
            <li>
              <span>Salade de fruits maison</span>
              <span>4.40 €</span>
            </li>
            <li>
              <span>Tarte aux fruits de saison</span>
              <span>4.30 €</span>
            </li>
            <li>
              <span>Boule de glace <br />
              (Saveurs aux choix : Framboise / caramel au beurre salé /<br />vanille / chocolat blanc speculoos / chocolat / café)</span>
              <span>0.80 €</span>
            </li>
          </ul>

          </div>
      </div>
      <div className="lien-ancre"></div>
      <Footer />

      {/* <Onglets /> */}
      {/* <Project projectNumber={0}/> */}
    </div>
  );
};