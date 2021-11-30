import React from "react";
import "../index.css";
import "../responsiveness.css";

export default function Topline() {
  return (
    <div className="topline">
      <div className="container">
        <div className="top_ribbon_t" style={{ flex: 3 }}>
          Comenzile pe website sunt preluate 24/7
        </div>
        <div className="top_ribbon_t" style={{ flex: 6 }}>
          Livrare gratuită la Chișinău de la 500 lei
        </div>
        <div className="topline_empty_div"></div>
        <div style={{ flex: 1 }} className="selectdiv top_ribbon_s">
          <select className="lang-select" name="language">
            <option value="RO">RO</option>
            <option value="RO">RU</option>
          </select>
        </div>
        <div className="sign-in">Вход</div>
        <div className="sign-up">Регистрация</div>
      </div>
    </div>
  );
}
