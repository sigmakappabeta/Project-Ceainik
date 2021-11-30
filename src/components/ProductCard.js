import React, { useState } from "react";
import "../index.css";
import "../responsiveness.css";
import pink_heart from "./images/pink_heart.png";
import white_plus from "./images/white_plus.png";
import pink_plus from "./images/pink_plus.png";
// import fpic1 from "./images/fpic1.png";
import likeHover from "./images/like_hover.png";
import liked from "./images/liked.png";

export default function ProductCard(props) {
  const span_style = {
    fontSize: "16px",
    marginLeft: "10px",
  };

  const [likeBtn, setLikeBtn] = useState(pink_heart);

  const HandleHover = () => {
    if (likeBtn === pink_heart) {
      setLikeBtn(likeHover);
    } else if (likeBtn === likeHover) {
      setLikeBtn(pink_heart);
    } else if (likeBtn === liked) {
      setLikeBtn(liked);
    }
  };

  const HandleLike = () => {
    return likeBtn !== liked ? setLikeBtn(liked) : setLikeBtn(likeHover);
  };

  const [plusBtn, setPlusBtn] = useState(white_plus);
  const HandlePlus = () => {
    return plusBtn === white_plus
      ? setPlusBtn(pink_plus)
      : setPlusBtn(white_plus);
  };
  return (
    <div className="product_card">
      <div className="product_card_content">
        <img src={props.productImage} />
        <img
          src={likeBtn}
          className="like_icon"
          style={{ width: "35.4px" }}
          onClick={HandleLike}
          onMouseOver={HandleHover}
          onMouseOut={HandleHover}
        />
        <div className="product_name">
          Fermentum diam, blandit hac nec nunc quis.
        </div>
        <div className="product_price">
          655<span style={span_style}>MDL</span>
        </div>
        <div className="buttom_block">
          <div className="detail_btn">Detalii</div>
          <div
            className="order_btn"
            onMouseOver={HandlePlus}
            onMouseOut={HandlePlus}
          >
            <img src={plusBtn} style={{ width: "20.97px" }} />
            Comanda
          </div>
        </div>
      </div>
    </div>
  );
}
