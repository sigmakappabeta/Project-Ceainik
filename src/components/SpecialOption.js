import React, { useState, useEffect, useContext } from "react";
// import TeddyBear from "./images/teddy_1.png";
import PinkPlus from "./images/pink_plus.png";
import { SelectedSpecialOption } from "./OrderSetup";

export default function SpecialOption(props) {
  const selection_context = useContext(SelectedSpecialOption);
  let selected_option_id = selection_context[0];
  const set_selected_option = selection_context[1];
  const [stl, setStl] = useState("rgba(229, 229, 229, 1)");
  useEffect(() => {
    if (selected_option_id === props.id) {
      setStl("rgba(234, 126, 115, 1)");
    } else if (
      selected_option_id !== props.id &&
      stl !== "rgba(234, 126, 115, 0.33)"
    ) {
      setStl("rgba(229, 229, 229, 1)");
    }
  });
  const HoverMouseOn = () => {
    if (stl === "rgba(229, 229, 229, 1)") {
      setStl("rgba(234, 126, 115, 0.33)");
    }
  };
  const HoverMouseOFF = () => {
    if (stl === "rgba(234, 126, 115, 0.33)") {
      setStl("rgba(229, 229, 229, 1)");
    }
  };
  const HandleClick = () => {
    set_selected_option(props.id);
  };
  return (
    <div
      className="special_option"
      onMouseOver={HoverMouseOn}
      onMouseOut={HoverMouseOFF}
      onClick={HandleClick}
      style={{ borderColor: stl }}
    >
      <img src={require("./images/" + props.image).default} />
      <div className="plus_and_price">
        <img src={PinkPlus} />
        <p>{props.price} MDL</p>
      </div>
    </div>
  );
}
