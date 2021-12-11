import React, { useState, createContext, useEffect } from "react";
import GreenCheckmark from "./images/green_check_mark.png";

import pink_heart from "./images/pink_heart.png";
import likeHover from "./images/like_hover.png";
import liked from "./images/liked.png";
import SizeOption from "./SizeOption";
import SpecialOption from "./SpecialOption";

export const SelectedSizeOption = createContext(null);
export const SelectedSpecialOption = createContext(null);
export default function OrderSetup() {
  //==========PRODUCT OBJECT=============

  const product = {
    name: "BUCHET_NO_#1",
    description:
      "Egestas fames nunc dignissim neque, amet cursus lobortis. Eu non pharetra ac justo iaculis. Risus nunc lectus egestas senectus ac potenti duis duis sagittis. Blandit eu, cursus purus vel iaculis proin. Consectetur accumsan pellentesque etiam orci. Nulla egestas adipiscing libero mi.",
    sizes: [
      { size: "mare", price: "860", id: "1" },
      { size: "mediu", price: "750", id: "2" },
      { size: "mic", price: "650", id: "3" },
    ],
    specs: [
      { name: "Ursuleț de pluș", img: "teddy_1.png", price: "123", id: "1" },
      {
        name: "Ursuleț de catifea",
        img: "teddy_1.png",
        price: "343",
        id: "2",
      },
      { name: "Ursuleț de roșu", img: "teddy_1.png", price: "563", id: "3" },
      { name: "Ursuleț de alb", img: "teddy_1.png", price: "783", id: "4" },
    ],
  };

  //=======================
  const [selected_size, set_selected_size] = useState("1");
  const [selected_special_op, set_selected_special_op] = useState("1");

  //============================
  let selected_size_obj;
  let selected_spec_obj;
  let grand_total;
  try {
    selected_size_obj = product.sizes.find((obj) => {
      return obj.id === selected_size;
    });
  } catch (err) {
    console.log("Error");
  }
  // if (selected_size_obj === undefined) {
  //   selected_size_obj = "";
  // }
  try {
    selected_spec_obj = product.specs.find((obj) => {
      return obj.id === selected_special_op;
    });
  } catch (err) {
    console.log("Error");
  }
  // if (selected_spec_obj === undefined) {
  //   selected_spec_obj = "";
  // }

  // console.log("re-render");
  // console.log(selected_size_obj);
  // console.log(selected_spec_obj);

  // if (selected_size_obj === "" || selected_spec_obj === "") {
  //   grand_total = "";
  // }
  grand_total =
    parseInt(selected_size_obj.price) + parseInt(selected_spec_obj.price);
  // console.log(grand_total);

  //============================
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

  //============================
  const size_options_block = product.sizes.map((size) => (
    <SizeOption
      size={size.size}
      price={size.price}
      id={size.id}
      key={size.id}
    />
  ));
  console.log(size_options_block);

  const special_option_block = product.specs.map((spec) => (
    <SpecialOption
      price={spec.price}
      image={spec.img}
      id={spec.id}
      key={spec.id}
    />
  ));

  return (
    <div className="order_setup">
      <SelectedSizeOption.Provider value={[selected_size, set_selected_size]}>
        <SelectedSpecialOption.Provider
          value={[selected_special_op, set_selected_special_op]}
        >
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="available">
            <img src={GreenCheckmark} />
            <p>este în stock</p>
          </div>
          <div className="size_picker">
            <p>Alegeti marimea</p>
            <div className="size_options_div">{size_options_block}</div>
          </div>
          {/* ============ */}
          <div className="special_options_picker">
            <p>Faceți cadoul mai special</p>
            <div className="special_options_div">{special_option_block}</div>
          </div>
          <div className="total_div">
            <div className="total_amount">
              <div>Suma totala</div>
              <div>{grand_total} MDL</div>
            </div>
            <div className="bought_item">
              <p>
                {product.name} ({selected_size_obj.size})
              </p>
              <p>{selected_size_obj.price} mdl</p>
            </div>
            <div className="bought_item">
              <p>{selected_spec_obj.name}</p>
              <p>{selected_spec_obj.price} mdl</p>
            </div>
          </div>
          <div className="order_btn_div">
            <button type="button" name="order">
              Comanda
            </button>
            <img
              src={likeBtn}
              className="product_page_like"
              onClick={HandleLike}
              onMouseOver={HandleHover}
              onMouseOut={HandleHover}
            />
          </div>
        </SelectedSpecialOption.Provider>
      </SelectedSizeOption.Provider>
    </div>
  );
}
