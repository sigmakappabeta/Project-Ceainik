import React, { useState, useContext, useRef } from "react";
import dropdown_arrow from "./images/dropdown_arrow.png";
import { deliveryTimeFrame } from "./OrderDetailsBlock.js";

export default function OrderDetailsDropdown(props) {
  const dropClosed = JSON.stringify([
    "delivery_dropdown",
    "myDropdown dropdown-content",
  ]);
  const dropOpen = JSON.stringify([
    "delivery_dropdown bottom_straight_corners",
    "myDropdown dropdown-content show",
  ]);

  const context = useContext(deliveryTimeFrame);

  const fromTime = context[0][0];
  const setFromTime = context[0][1];

  const untilTime = context[1][0];
  const setUntilTime = context[1][1];

  const [state, setState] = useState(props.name);
  const dropRef = useRef(null);
  const selectRef = useRef(null);

  const [dropdownState, setDropdownState] = useState(dropClosed);

  const time_array = [
    { hour: "00:00", id: 0 },
    { hour: "01:00", id: 1 },
    { hour: "02:00", id: 2 },
    { hour: "03:00", id: 3 },
    { hour: "04:00", id: 4 },
    { hour: "05:00", id: 5 },
    { hour: "06:00", id: 6 },
    { hour: "07:00", id: 7 },
    { hour: "08:00", id: 8 },
    { hour: "09:00", id: 9 },
    { hour: "10:00", id: 10 },
    { hour: "11:00", id: 11 },
    { hour: "12:00", id: 12 },
    { hour: "13:00", id: 13 },
    { hour: "14:00", id: 14 },
    { hour: "15:00", id: 15 },
    { hour: "16:00", id: 16 },
    { hour: "17:00", id: 17 },
    { hour: "18:00", id: 18 },
    { hour: "19:00", id: 19 },
    { hour: "20:00", id: 20 },
    { hour: "21:00", id: 21 },
    { hour: "22:00", id: 22 },
    { hour: "23:00", id: 23 },
  ];

  const options = time_array.map((time) => {
    return (
      <p
        onClick={() => {
          setState(time.hour);
          if (props.id === "0") {
            setFromTime(time.id);
          } else if (props.id === "1") {
            setUntilTime(time.id);
          }
        }}
        key={time.id}
      >
        {time.hour}
      </p>
    );
  });

  const refClick = () => {
    let currentWidth = dropRef.current.getBoundingClientRect().width + "px";
    selectRef.current.style.width = currentWidth;
  };

  const handleClick = () => {
    return dropdownState === dropClosed
      ? setDropdownState(dropOpen)
      : setDropdownState(dropClosed);
  };

  const wraperFunc = () => {
    handleClick();
    refClick();
  };
  return (
    <div
      className={JSON.parse(dropdownState)[0]}
      onClick={wraperFunc}
      ref={dropRef}
    >
      <p>{state}</p>
      <img src={dropdown_arrow} />
      <div className={JSON.parse(dropdownState)[1]} ref={selectRef}>
        {options}
      </div>
    </div>
  );
}
