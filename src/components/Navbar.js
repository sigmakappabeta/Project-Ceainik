import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import "../responsiveness.css";
import menu_white from "./images/menu_white.png";
import cart_icon from "./images/cart_icon.png";
import hover_cart_icon from "./images/hover_cart_icon.png";
import heart_icon from "./images/heart_icon.png";
import hover_heart_icon from "./images/hover_heart_icon.png";

export default function Navbar() {
  const [responsiveMenu, setResponsiveMenu] = useState("menu");
  const [heartIcon, setHeartIcon] = useState(heart_icon);
  const [cartIcon, setCartIcon] = useState(cart_icon);

  const toggle_responsive = () => {
    return responsiveMenu === "menu"
      ? setResponsiveMenu("menu responsive")
      : setResponsiveMenu("menu");
  };

  const handleHeartHover = () => {
    return heartIcon === heart_icon
      ? setHeartIcon(hover_heart_icon)
      : setHeartIcon(heart_icon);
  };
  const handleCarttHover = () => {
    return cartIcon === cart_icon
      ? setCartIcon(hover_cart_icon)
      : setCartIcon(cart_icon);
  };
  return (
    <div className="topnav">
      <div className="container">
        <div className={responsiveMenu}>
          <img src={menu_white} className="icon" onClick={toggle_responsive} />
          <select>
            <option value="">BUCHETE</option>
          </select>
          <select>
            <option value="">COMPOZIȚI</option>
          </select>
          <select>
            <option value="">CADOURI ȘI ACCESORII</option>
          </select>
          <select>
            <option value="">TRANDAFIRI</option>
          </select>
          <select>
            <option value="">OCAZIE</option>
          </select>
          <NavLink to="/catalog">TOATE PRODUSELE</NavLink>

          <NavLink to="/contacts">CONTACTE</NavLink>
        </div>
        <div className="topnav_empty_div"></div>
        <div className="cartdiv">
          <div className="inner_cartdiv">
            <NavLink to="/cart">
              <img
                src={cartIcon}
                className="cart_icon"
                onMouseOver={handleCarttHover}
                onMouseOut={handleCarttHover}
              />
            </NavLink>

            <p>0.00 MDL</p>
            <img
              src={heartIcon}
              className="heart_icon"
              onMouseOver={handleHeartHover}
              onMouseOut={handleHeartHover}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
