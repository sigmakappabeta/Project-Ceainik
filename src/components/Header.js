import React from "react";
import "../index.css";
import "../responsiveness.css";
import logo from "./images/logo.png";
import search_icon from "./images/search_icon.png";
import whatsapp from "./images/whatsapp.png";
import viber from "./images/viber.png";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo-div">
          <img src={logo} className="logo-img" />
        </div>
        <div className="search_bar">
          <form className="search_form">
            <div className="search_bar_input">
              <input type="text" placeholder="Search ..." />
            </div>
            <div className="search_bar_button">
              <button type="submit" name="button">
                <img src={search_icon} className="search_icon" />
              </button>
            </div>
          </form>
        </div>
        <div className="social_icons_top">
          <img src={whatsapp} />
          <img src={viber} />
        </div>
        <div className="phone">
          <div className="bignum">+ (373) 56 89 21</div>
          <div className="comment_bignum">Заказать звонок</div>
        </div>
      </div>
    </div>
  );
}
