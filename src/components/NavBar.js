import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if(window.scrollY >= 600) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
    
  } 
  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className="navbar">
      {/* <nav className={navbar ? 'navbar active' : 'navbar'}> */}
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Pizzeria chez Mario <i className="fa fa-spinner fa-spi"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                A propos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/menu"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                La carte
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <div className={click ? "ferme" : "ouvert"}>&nbsp;</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;