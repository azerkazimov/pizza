import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Route, Routes } from "react-router-dom";
import Basket from "../Basket/Basket";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [row, setRow] = useState(true);
  const [burger_class, setBurgerClass] = useState(false);
  const [burger_bar, setBurgerBar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 993) {
        setRow(false);
      } else {
        setRow(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const changeBG = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBG);

  const updateBurger = () => {
    setBurgerClass(!burger_class);
    setBurgerBar(!burger_bar);
  };

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <div className="container">
        <div className={row ? "row" : "column"}>
          <div className="col-12 col-md-3 flex-container flex-align-center flex-justify-center">
            <RouterLink to="/" className="logo">
              <img src={logo} alt="Pizza" />
            </RouterLink>
          </div>
          <div className="col-12 col-md-6 flex-container flex-align-center flex-justify-center">
            <label htmlFor="menu-btn" className="menu-icon">
              <span className="nav-icon"></span>
            </label>
            <div className="burger-menu" onClick={updateBurger}>
              <span className={burger_bar ? "click" : "unclick"}></span>
              <span className={burger_bar ? "click" : "unclick"}></span>
              <span className={burger_bar ? "click" : "unclick"}></span>
            </div>
            <ul className={burger_class ? "open" : "menu"}>
              <li>
                <Link to="main">Home</Link>
              </li>
              <li>
                <Link to="menu">Menu</Link>
              </li>
              <li>
                <Link to="event">Events</Link>
              </li>
              <li>
                <Link to="about">About us</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 flex-container flex-align-center flex-justify-center">
            <Link to="#">
              <Button name="Login" />
            </Link>

            <RouterLink to="/basket">
              <FontAwesomeIcon icon={faBagShopping} className="mx-2" />
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
