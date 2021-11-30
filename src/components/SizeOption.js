import React, { useState, useContext, useEffect } from "react";
import { SelectedSizeOption } from "./OrderSetup";

export default function SizeOption(props) {
  //=========CONTEXT RETRIEVING============
  const selection_context = useContext(SelectedSizeOption);
  let selected_size_id = selection_context[0];
  const set_selected_size = selection_context[1];

  //================EVENT HANDLERS======================
  const [stl, setStl] = useState("white");
  useEffect(() => {
    if (selected_size_id === props.id) {
      setStl("rgba(234, 126, 115, 1)");
    } else if (
      selected_size_id !== props.id &&
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
    set_selected_size(props.id);
  };

  return (
    <div
      class="size_option"
      onMouseOver={HoverMouseOn}
      onMouseOut={HoverMouseOFF}
      onClick={HandleClick}
      style={{ borderColor: stl }}
    >
      <span class="size_span">{props.size}</span>
      <span class="price_span">{props.price} MDL</span>
    </div>
  );
}
