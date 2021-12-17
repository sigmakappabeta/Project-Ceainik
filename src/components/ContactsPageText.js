import React, { useState } from "react";
import fb_green from "./images/fb_green.png";
import fb_original from "./images/fb_original.png";
import insta_green from "./images/insta_green.png";
import insta_original from "./images/insta_original.png";

export default function ContactsPageText(props) {
  const [fbBtnState, setFbBtnState] = useState(fb_green);
  const [instaBtnState, setInstaBtnState] = useState(insta_green);

  const hoverFB = () => {
    fbBtnState === fb_green
      ? setFbBtnState(fb_original)
      : setFbBtnState(fb_green);
  };

  const hoverInsta = () => {
    instaBtnState === insta_green
      ? setInstaBtnState(insta_original)
      : setInstaBtnState(insta_green);
  };

  return (
    <div className="block1_2" id={props.id}>
      <p style={{ fontWeight: "600", marginBottom: "30px" }}>
        Egestas fames nunc dignissim neque, amet cursus lobortis. Eu non
        pharetra ac justo iaculis. Risus nunc lectus egestas senectus ac potenti
        duis duis sagittis. Blandit eu, cursus purus vel iaculis proin.
      </p>
      <p style={{ marginBottom: "30px" }}>
        Egestas fames nunc dignissim neque, amet cursus lobortis. Eu non
        pharetra ac justo iaculis. Risus nunc lectus egestas senectus ac potenti
        duis duis sagittis. Blandit eu, cursus purus vel iaculis proin.
        Consectetur accumsan pellentesque etiam orci. Nulla egestas adipiscing
        libero mi. Vulputate nam eget consectetur tortor malesuada sagittis.
      </p>
      <p className="p_tel" style={{ marginBottom: "30px" }}>
        <span style={{ fontWeight: "bold" }}>E-mail</span>
        <br />
        georgia.young@example.com
      </p>
      <p className="p_tel">
        <span style={{ fontWeight: "bold" }}>Telefon</span>
        <br />+ (373) 56 89 21
      </p>
      <div className="social_icons_div">
        <img src={fbBtnState} onMouseOver={hoverFB} onMouseOut={hoverFB} />
        <img
          src={instaBtnState}
          onMouseOver={hoverInsta}
          onMouseOut={hoverInsta}
        />
      </div>
    </div>
  );
}
