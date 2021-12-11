import React, { useState, createContext } from "react";
import dropdown_arrow from "./images/dropdown_arrow.png";
import OrderDetailsDropdown from "./OrderDetailsDropdown";

export const deliveryTimeFrame = createContext(null);

export default function OrderDetailsBlock() {
  const [fromTime, setFromTime] = useState("De la");
  const [untilTime, setUntilTime] = useState("Pana la");
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;

  return (
    <div className="order_details_block">
      <h1>Datele comenzii</h1>
      <div className="ordered_item">
        <p className="name_paragraph">Flori</p>
        <p className="price_paragraph">1150 mdl</p>
      </div>
      <div className="ordered_item">
        <p className="name_paragraph">Preț costul livrării</p>
        <p className="price_paragraph">1150 mdl</p>
      </div>
      <div className="cart_total">
        <p className="cart_total_paragraph">Valoarea totală</p>
        <p className="cart_total_price">1300 mdl</p>
      </div>
      <div className="delivery dropdown">
        <h1>Data si ora livrarii</h1>
        <div className="delivery_dropdowns_block">
          <div className="delivery_date">
            {/* <p>Data</p>
            <img src={dropdown_arrow} /> */}
            <input
              type="date"
              className="date_input"
              //value={today}
              min={today}
            />
          </div>
          <deliveryTimeFrame.Provider
            value={[
              [fromTime, setFromTime],
              [untilTime, setUntilTime],
            ]}
          >
            <OrderDetailsDropdown name={fromTime} id="0" />
            <OrderDetailsDropdown name={untilTime} id="1" />
          </deliveryTimeFrame.Provider>
        </div>
        <button type="button" name="order">
          Comanda
        </button>
      </div>
    </div>
  );
}
