import React from "react";

import buchet from "./images/buchet.png";

export default function Gallery() {
  return (
    <div className="gallery">
      <img src={buchet} />
      <div className="other_photos">
        <img src={buchet} />
        <img src={buchet} />
        <img src={buchet} />
        <img src={buchet} />
      </div>
    </div>
  );
}
