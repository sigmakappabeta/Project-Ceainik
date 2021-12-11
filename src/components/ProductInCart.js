import React, { useState } from "react";
import buchet1_square from "./images/buchet1_square.png";
import remove_green from "./images/remove_green.png";
import remove_pink from "./images/remove_pink.png";

export default function ProductInCart() {
  const [removal_btn, setRemovalBtn] = useState(remove_green);
  const handleRemoveHover = () => {
    return removal_btn === remove_green
      ? setRemovalBtn(remove_pink)
      : setRemovalBtn(remove_green);
  };
  return (
    <div className="product_block">
      <img src={buchet1_square} />
      <div className="product_info_and_removal">
        <div className="product_info">
          <p>Trandafiri rosii cu fundita roz</p>
          <span>556 MDL</span>
        </div>
        <img
          src={removal_btn}
          onMouseOver={handleRemoveHover}
          onMouseOut={handleRemoveHover}
          alt=""
        />
      </div>
    </div>
  );
}
