import React, { useEffect } from "react";
import "../index.css";
import "../responsiveness.css";
import "../slider_stylesheet.css";

//==================================================

export default function Slider() {
  useEffect(() => {
    var inputLeft = document.getElementById("input-left");
    var inputRight = document.getElementById("input-right");

    var thumbLeft = document.querySelector(".slider > .thumb.left");
    var thumbRight = document.querySelector(".slider > .thumb.right");
    var range = document.querySelector(".slider > .range");

    let priceBoxleft = document.querySelector("#sv_left");
    let priceBoxright = document.querySelector("#sv_right");
    function value_change_left() {
      priceBoxleft.textContent = inputLeft.value;
    }
    function value_change_right() {
      priceBoxright.textContent = inputRight.value;
    }
    function setLeftValue() {
      var _this = inputLeft;
      let min = parseInt(_this.min);
      let max = parseInt(_this.max);

      _this.value = Math.min(
        parseInt(_this.value),
        parseInt(inputRight.value) - 1
      );

      var percent = ((_this.value - min) / (max - min)) * 100;

      thumbLeft.style.left = percent + 7 + "%";
      range.style.left = percent + "%";

      value_change_left(_this.value);
    }
    setLeftValue();

    function setRightValue() {
      var _this = inputRight;
      let min = parseInt(_this.min);
      let max = parseInt(_this.max);

      _this.value = Math.max(
        parseInt(_this.value),
        parseInt(inputLeft.value) + 1
      );

      var percent = ((_this.value - min) / (max - min)) * 100;

      thumbRight.style.right = 100 + 7 - percent + "%";
      range.style.right = 100 - percent + "%";
      value_change_right(_this);
    }
    setRightValue();

    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);

    //====================================================

    // priceBoxleft.text(inputLeft.value);
    // priceBoxright.text(inputRight.value);
  }, []);

  //====================================================
  return (
    <div className="multi-range-slider">
      <div className="area_title">
        <p>Preț (MDL)</p>
        {/* <img src="./images/arrow_up.png"> */}
      </div>
      <div className="inner">
        <input
          type="range"
          //onInput={value_change_left(this.value)}
          id="input-left"
          min="0"
          max="1200"
          value="300"
        />
        <input
          type="range"
          //onInput={value_change_right(this.value)}
          id="input-right"
          min="0"
          max="1200"
          value="900"
        />
      </div>
      <div className="slider">
        <div className="track"></div>
        <div className="range"></div>
        <div className="thumb left"></div>
        <div className="thumb right"></div>
        <div className="endpoint left"></div>
        <div className="endpoint right"></div>
      </div>
      <div className="slidervalues">
        <p>От</p>
        <div className="s_val_div" id="sv_left">
          123
        </div>
        <p>До</p>
        <div className="s_val_div" id="sv_right">
          123
        </div>
      </div>
    </div>
  );
}
