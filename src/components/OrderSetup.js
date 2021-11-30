import React, { useState, createContext, useEffect } from "react";
import GreenCheckmark from "./images/green_check_mark.png";

import PinkHeart from "./images/pink_heart.png";
import SizeOption from "./SizeOption";
import SpecialOption from "./SpecialOption";

export const SelectedSizeOption = createContext(null);
export const SelectedSpecialOption = createContext(null);
export default function OrderSetup() {
  const [selected_size, set_selected_size] = useState("1");
  const [selected_special_op, set_selected_special_op] = useState("1");
  return (
    <div className="order_setup">
      <h1>BIBENDUM ORNARE “ SIT NON CURSUS ET ”</h1>
      <p>
        Egestas fames nunc dignissim neque, amet cursus lobortis. Eu non
        pharetra ac justo iaculis. Risus nunc lectus egestas senectus ac potenti
        duis duis sagittis. Blandit eu, cursus purus vel iaculis proin.
        Consectetur accumsan pellentesque etiam orci. Nulla egestas adipiscing
        libero mi.
      </p>
      <div className="available">
        <img src={GreenCheckmark} />
        <p>este în stock</p>
      </div>
      <div className="size_picker">
        <p>Alegeti marimea</p>
        <div className="size_options_div">
          <SelectedSizeOption.Provider
            value={[selected_size, set_selected_size]}
          >
            <SizeOption size="mare" price="860" id="1" />
            <SizeOption size="mediu" price="750" id="2" />
            <SizeOption size="mic" price="650" id="3" />
          </SelectedSizeOption.Provider>
        </div>
      </div>
      {/* ============ */}
      <div className="special_options_picker">
        <p>Faceți cadoul mai special</p>
        <div className="special_options_div">
          <SelectedSpecialOption.Provider
            value={[selected_special_op, set_selected_special_op]}
          >
            <SpecialOption price="123" id="1" />
            <SpecialOption price="123" id="1" />
            <SpecialOption price="123" id="1" />
            <SpecialOption price="123" id="1" />
          </SelectedSpecialOption.Provider>
        </div>
      </div>
      <div className="total_div">
        <div className="total_amount">
          <div>Suma totala</div>
          <div>1200 MDL</div>
        </div>
        <div className="bought_item">
          <p>Flori</p>
          <p>860 mdl</p>
        </div>
        <div className="bought_item">
          <p>Jucarie iepuras cu inima</p>
          <p>340 mdl</p>
        </div>
      </div>
      <div className="order_btn_div">
        <button type="button" name="order">
          Comanda
        </button>
        <img src={PinkHeart} className="product_page_like" />
      </div>
    </div>
  );
}
