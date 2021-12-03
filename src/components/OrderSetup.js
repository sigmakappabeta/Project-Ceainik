import React, { useState, createContext, useEffect } from "react";
import GreenCheckmark from "./images/green_check_mark.png";

import PinkHeart from "./images/pink_heart.png";
import SizeOption from "./SizeOption";
import SpecialOption from "./SpecialOption";

export const SelectedSizeOption = createContext(null);
export const SelectedSpecialOption = createContext(null);
export default function OrderSetup() {
  //==========PRODUCT OBJECT=============
  let i = 0;
  const product = {
    name: "BUCHET_NO_#1",
    description:
      "Egestas fames nunc dignissim neque, amet cursus lobortis. Eu non pharetra ac justo iaculis. Risus nunc lectus egestas senectus ac potenti duis duis sagittis. Blandit eu, cursus purus vel iaculis proin. Consectetur accumsan pellentesque etiam orci. Nulla egestas adipiscing libero mi.",
    sizes: [
      { size: "mare", price: "860", id: "1" },
      { size: "mediu", price: "750", id: "2" },
      { size: "mic", price: "650", id: "3" },
    ],
    specs: [
      { img: "teddy_1.png", price: "123", id: "1" },
      { img: "teddy_1.png", price: "343", id: "2" },
      { img: "teddy_1.png", price: "563", id: "3" },
      { img: "teddy_1.png", price: "783", id: "4" },
    ],
  };

  //=======================
  const [selected_size, set_selected_size] = useState("1");
  const [selected_special_op, set_selected_special_op] = useState("1");
  const product_sizes = product.sizes;
  const size_options_block = product.sizes.map((size) => (
    <SizeOption
      size={size.size}
      price={size.price}
      id={size.id}
      key={size.id}
    />
  ));

  const special_option_block = product.specs.map((spec) => (
    <SpecialOption price={spec.price} image={spec.img} id={spec.id} />
  ));

  return (
    <div className="order_setup">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
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
            {size_options_block}
            {/* <SizeOption size="mare" price="860" id="1" />
            <SizeOption size="mediu" price="750" id="2" />
            <SizeOption size="mic" price="650" id="3" /> */}
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
            {/* <SpecialOption price="123" id="1" />
            <SpecialOption price="232" id="2" />
            <SpecialOption price="456" id="3" />
            <SpecialOption price="678" id="4" /> */}
            {special_option_block}
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
