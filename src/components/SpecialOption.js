import React, { useState, useEffect, useContext } from "react";
import TeddyBear from "./images/teddy_1.png";
import PinkPlus from "./images/pink_plus.png";
import { SelectedSpecialOption } from "./OrderSetup";

export default function SpecialOption(props) {
  const selection_context = useContext(SelectedSpecialOption);
  let selected_option_id = selection_context[0];
  const set_selected_option = selection_context[1];
  const [stl, setStl] = useState("white");
  useEffect(() => {
    if (selected_option_id === props.id) {
      setStl("rgba(234, 126, 115, 1)");
    } else if (
      selected_option_id !== props.id &&
      stl !== "rgba(76, 82, 40, 0.34)"
    ) {
      setStl("white");
    }
  });
  const HoverMouseOn = () => {
    if (stl === "white") {
      setStl("rgba(76, 82, 40, 0.34)");
    }
  };
  const HoverMouseOFF = () => {
    if (stl === "rgba(76, 82, 40, 0.34)") {
      setStl("white");
    }
  };
  const HandleClick = () => {
    set_selected_option(props.id);
  };
  return (
    <div className="special_option">
      <img src={TeddyBear} />
      <div className="plus_and_price">
        <img src={PinkPlus} />
        <p>{props.price} MDL</p>
      </div>
    </div>
  );
}
