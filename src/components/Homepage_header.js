import React from "react";
import "../index.css";
import "../responsiveness.css";

export default function HomepageHeader(props) {
  const current_style = {
    textAlign: "center",
    lineHeight: 1.6,
  };
  return (
    <div className="text_block">
      <div className="homepage_header">
        <h1 style={current_style}>
          FLORI ÎN MOLDOVA DE LA CEL MAI BUN BOUTIQUE CU FLORI
          <br />
          COMANDÂND FLORI DE LA NOI – DĂRUIȚI EMOȚII POZITIVE!
        </h1>
      </div>
    </div>
  );
}
