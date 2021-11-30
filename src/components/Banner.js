import React from "react";
import "../index.css";
import "../responsiveness.css";
import bannerBackground from "./images/banner.png";

export default function Banner() {
  return (
    <div className="wraper">
      <div
        className="banner"
        style={{ backgroundImage: `url(${bannerBackground})` }}
      >
        <div>
          ДОСТАВКА ЦВЕТОВ В КИШИНЕВЕ.
          <br />7 ЛЕТ НА РЫНКЕ МОЛДОВЫ
        </div>
      </div>
    </div>
  );
}
