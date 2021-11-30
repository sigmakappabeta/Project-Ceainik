import React, { useState } from "react";
import emptyCheckbox from "./images/empty_checkbox.png";
import checkedCheckbox from "./images/checked_checkbox.png";

export default function Checkbox(props) {
  const [state, setState] = useState(emptyCheckbox);
  const handleClick = () => {
    return state === emptyCheckbox
      ? setState(checkedCheckbox)
      : setState(emptyCheckbox);
  };
  return (
    <div className="check_option" onClick={handleClick}>
      <img src={state} />
      <p>{props.value}</p>
    </div>
  );
}
