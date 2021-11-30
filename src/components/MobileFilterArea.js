import React, { useContext } from "react";
import { DisplayContext } from "../App";

export default function MobileFilterArea() {
  const DisplayContextMod = useContext(DisplayContext);
  let displayVal = DisplayContextMod[0];
  const setDisplayVal = DisplayContextMod[1];
  //setDisplayVal("none");
  const handleDisplay = () => {
    return displayVal === "block"
      ? setDisplayVal("none")
      : setDisplayVal("block");
  };
  //console.log(displayVal);
  return (
    <div className="MobileFilter">
      <p onClick={handleDisplay}>☰ Filtrează</p>
    </div>
  );
}
