import React, { useState, useEffect, useContext } from "react";
import "../index.css";
import "../responsiveness.css";
import Slider from "./Slider";
import Checkbox from "./Checkbox";
import emptyCheckbox from "./images/empty_checkbox.png";
import ArrowUp from "./images/arrow_up.png";
import dropdownArrow from "./images/dropdown_arrow.png";
import { DisplayContext } from "../App";

export default function FilterBox() {
  // START of DISPLAY CONTEXT block

  const DisplayContextMod = useContext(DisplayContext);
  let displayVal = DisplayContextMod[0];
  //const setDisplayVal = DisplayContextMod[1];
  //console.log(displayVal);

  // END of DISPLAY CONTEXT block
  // START of height-setting block for side filtering area
  const [FB_display, setFB_display] = useState();

  const [scrollYCoord, setScollYCoord] = useState(0);

  const [FB_height, setFB_height] = useState("auto");

  let style_obj = { display: displayVal, height: FB_height };
  //console.log(style_obj.display);
  const [height_obj, setHeight_obj] = useState({ height: FB_height });

  const scrollPos = () => {
    if (window.innerWidth <= 946) {
      setScollYCoord(window.scrollY);
      if (scrollYCoord <= 163.29) {
        setFB_height(window.innerHeight - 279.44 + scrollYCoord);
        setHeight_obj({ height: FB_height });
      } else {
        setFB_height(window.innerHeight - 116.15);
        setHeight_obj({ height: FB_height });
      }
    } else {
      setFB_height("auto");
      setHeight_obj({ height: FB_height });
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollPos);

    return () => {
      document.removeEventListener("scroll", scrollPos);
    };
  });

  // END of height-setting block for side filtering area

  return (
    <div className="filter_box" style={style_obj}>
      <Slider />
      <div className="filter_area">
        <div className="filter">
          <div className="area_title">
            <p>Ambalaj</p>
            <img src={ArrowUp} />
          </div>
          <Checkbox value="Cutie" />
          <Checkbox value="Coș" />
          <Checkbox value="Fără ambalaj" />
          <Checkbox value="Peliculă" />
          <Checkbox value="Hârtie" />
          <Checkbox value="Plasa" />
          <Checkbox value="Materie" />
        </div>

        <div className="filter" style={{ marginTop: "17px" }}>
          <div className="area_title">
            <p>Culoarea ambalaj</p>
          </div>
          <div className="colors_div">
            <div
              className="color_option"
              style={{ backgroundColor: "red" }}
            ></div>
            <div
              className="color_option"
              style={{ backgroundColor: "orange" }}
            ></div>
            <div
              className="color_option"
              style={{ backgroundColor: "yellow" }}
            ></div>
            <div
              className="color_option"
              style={{ backgroundColor: "green" }}
            ></div>
            <div
              className="color_option"
              style={{ backgroundColor: "rgba(0, 235, 178, 1)" }}
            ></div>
            <div
              className="color_option"
              style={{ backgroundColor: "rgba(51, 145, 255, 1)" }}
            ></div>
            <div
              className="color_option"
              style={{ backgroundColor: "rgba(145, 112, 240, 1)" }}
            ></div>
            <div
              className="color_option"
              style={{ backgroundColor: "rgba(255, 97, 220, 1)" }}
            ></div>
          </div>
        </div>
        <div className="filter" style={{ marginTop: "17px" }}>
          <div className="area_title">
            <p>Pentru cine</p>
            <img src={dropdownArrow} />
          </div>
        </div>
        <div className="filter" style={{ marginTop: "17px" }}>
          <div className="area_title">
            <p>Ocazie</p>
            <img src={dropdownArrow} />
          </div>
        </div>
        <div className="reset_btn">
          <button type="button" name="reset">
            Resetează
          </button>
        </div>
      </div>
    </div>
  );
}
