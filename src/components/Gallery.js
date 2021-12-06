import React, { useState } from "react";

import buchet from "./images/buchet.png";

export default function Gallery() {
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
    images: [
      "buchet.png",
      "buchet_orange.png",
      "buchet_blue.png",
      "buchet_green.png",
    ],
  };
  const [current_img, set_current_img] = useState(0);
  let image_list_length = product.images.length;

  const nextImage = () => {
    if (current_img === image_list_length - 1) {
      set_current_img(0);
    } else {
      set_current_img(current_img + 1);
    }
  };
  const prevImage = () => {
    if (current_img === 0) {
      set_current_img(image_list_length - 1);
    } else {
      set_current_img(current_img - 1);
    }
  };
  const small_img_block = product.images.map((image) => (
    <img src={require("./images/" + image).default} />
  ));

  return (
    <div className="gallery">
      <div className="product_image_div">
        <img src={require("./images/" + product.images[current_img]).default} />
        <a className="prev" onClick={prevImage}>
          &#10094;
        </a>
        <a className="next" onClick={nextImage}>
          &#10095;
        </a>
      </div>
      <div className="other_photos">{small_img_block}</div>
    </div>
  );
}
