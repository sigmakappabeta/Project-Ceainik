import React, { useState } from "react";
import checkbox from "./images/checkbox.png";
import checked_checkbox from "./images/checked_round_checkbox.png";
export default function CustomerDetailsForm() {
  const [checkboxImg, setCheckboxImg] = useState(checkbox);
  const handleClick = () => {
    return checkboxImg === checkbox
      ? setCheckboxImg(checked_checkbox)
      : setCheckboxImg(checkbox);
  };
  return (
    <form>
      <div className="form_container">
        <h1>Datele destinatarului</h1>
        <input
          type="text"
          name="name"
          placeholder="Numele destinatarului *"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefonul destinatarului"
        />
        <input type="text" name="city" placeholder="Orașul" />
        <input
          type="text"
          name="address"
          placeholder="Adresa destinatarului (dacă știi)"
        />
        <input type="text" name="comment" placeholder="Comentariu" />
      </div>
      <div className="form_container" id="form_container2">
        <h1>Datele expeditorului</h1>
        <input
          type="text"
          name="name"
          placeholder="Numele destinatarului"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefonul destinatarului"
        />
        <input type="text" name="city" placeholder="Orașul" />
        <input
          type="text"
          name="address"
          placeholder="Adresa destinatarului (dacă știi)"
        />
        <div className="checkbox_div">
          <img src={checkboxImg} onClick={handleClick} />
          <p>Păstrează anonimatul expeditorului</p>
        </div>
      </div>
    </form>
  );
}
