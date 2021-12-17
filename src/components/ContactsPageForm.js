import React from "react";
import form_background from "./images/from_background.png";

export default function ContactsPageForm(props) {
  return (
    <div className="block1_2" id={props.id}>
      <div className="form_box">
        <form
          className="contact_form"
          style={{ backgroundImage: `url(${form_background})` }}
        >
          {/* <img src={form_background} alt="" /> */}
          <p className="title_p">Contactati-ne!</p>
          <input type="text" name="name" placeholder="Nume" />
          <input type="text" name="subject" placeholder="Tema" />
          <input type="text" name="email" placeholder="Email-ul Dvs." />
          <textarea name="name" rows="8" cols="40">
            Mesaj
          </textarea>
          {/* <!--<input className ="long_text_input" type="text" name="name" value="asd" style="height:187px">--> */}
          <p className="capcha_p">Capcha placeholder</p>
          <button type="button" name="send">
            Transmite
          </button>
        </form>
      </div>
    </div>
  );
}
