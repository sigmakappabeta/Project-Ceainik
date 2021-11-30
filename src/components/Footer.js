import React from "react";
import "../index.css";
import "../responsiveness.css";

import fb_white from "./images/fb_white.png";
import insta_white from "./images/insta_white.png";
import mastercard from "./images/mastercard.png";
import visa from "./images/visa.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_nav">
        <div className="item_list">
          <div className="ft_head">BUCHETE</div>
          <a href="#">Mixte</a>
          <a href="#">Trandafiri</a>
          <a href="#">Hortensii</a>
          <a href="#">Lalele</a>
          <a href="#">Eustome</a>
          <a href="#">Bujori</a>
          <a href="#">Crizanteme</a>
          <a href="#">Irisi</a>
          <a href="#">Orhidei</a>
          <a href="#">Crini</a>
          <a href="#">Frezii</a>
          <a href="#">Gerbere</a>
          <a href="#">Alstromeria</a>
          <a href="#">Pentru Barbati</a>
        </div>
        <div className="item_list">
          <div className="ft_head">COMPOZIȚI</div>
          <a href="#">Flori in Cutie</a>
          <a href="#">Flori in Ladite</a>
          <a href="#">Flori in Ghiveci</a>
          <a href="#">Flori cu Dulciuri</a>
          <a href="#">Cosuri cu Flori</a>
          <a href="#">Inimi din Flori</a>
          <a href="#">Flori cu Fructe</a>
        </div>
        <div className="item_list">
          <div className="ft_head">
            CADOURI ȘI
            <br />
            ACCESORII
          </div>
          <a href="#">Dulciuri & Ciocolate</a>
          <a href="#">Baloane</a>
          <a href="#">Torturi</a>
          <a href="#">Jucarii</a>
          <a href="#">Certificate Cadou</a>
        </div>
        <div className="item_list">
          <div className="ft_head">TRANDAFIRI</div>
          <a href="#">Trandafiri in Cutii</a>
          <a href="#">Trandafiri in Cos</a>
          <a href="#">Buchete de trandafiri</a>
          <a href="#">Trandafiri in Ladite</a>
          <a href="#">101 Trandafiri</a>
          <a href="#">1001 Trandafiri</a>
          <a href="#">51 Trandafiri</a>
          <a href="#">25 Trandafiri</a>
          <a href="#">15 Trandafiri</a>
          <a href="#">9 Trandafiri</a>
        </div>
        <div className="item_list">
          <div className="ft_head">OCAZIE</div>
          <a href="#">8 Martie</a>
          <a href="#">14 Februarie</a>
          <a href="#">Zi de Nastere</a>
          <a href="#">23 Februarie</a>
          <a href="#">Anul-Nou</a>
          <a href="#">Te Iubesc</a>
          <a href="#">Scuză-mă</a>
        </div>
        <div className="item_list">
          <div className="ft_head">MENU</div>
          <a href="#">Despre noi</a>
          <a href="#">Noutăți</a>
          <a href="#">Contacte</a>
        </div>
        <div className="item_list">
          <div className="ft_head">CONTACTE</div>
          <p>
            B-dul. Cireșilor nr. 2B, bl. 5,
            <br /> et. 25, ap. 05
          </p>
          <p>(373) 69 356 930</p>
          <p>vuhaithuoute@gmail.com</p>
          <p>
            Пн-Чт с 9:00 - 20:00
            <br />
            Пт-Сб с 9:00 - 21:00
            <br />
            ВС с 10:00 - 18:00
          </p>
          <div className="icons_foot_social">
            <img src={fb_white} style={{ marginRight: "15px" }} />
            <img src={insta_white} />
          </div>
          <p style={{ marginTop: "30px" }}>METODE DE PLATA</p>
          <div className="icons_foot_pay">
            <img src={mastercard} style={{ marginRight: "15px" }} />
            <img src={visa} />
          </div>
        </div>
      </div>
      <div className="cellar"></div>
    </div>
  );
}
