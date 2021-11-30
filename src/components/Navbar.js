import React, { useState } from "react";
import "../index.css";
import "../responsiveness.css";
import menu_white from "./images/menu_white.png";
import cart_icon from "./images/cart_icon.png";
import heart_icon from "./images/heart_icon.png";

export default function Navbar() {
  const [responsiveMenu, setResponsiveMenu] = useState("menu");

  const toggle_responsive = () => {
    return responsiveMenu === "menu"
      ? setResponsiveMenu("menu responsive")
      : setResponsiveMenu("menu");
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
          <select>
            <option value="">TOATE PRODUSELE</option>
          </select>
          <div>CONTACTE</div>
        </div>
        <div className="topnav_empty_div"></div>
        <div className="cartdiv">
          <div className="inner_cartdiv">
            <img src={cart_icon} className="cart_icon" />
            <p>13 259 MDL</p>
            <img src={heart_icon} className="heart_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
