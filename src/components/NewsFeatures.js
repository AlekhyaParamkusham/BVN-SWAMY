import React from "react";
import "../styles/NewsFeatures.css";

function NewsFeatures(props) {
  return (
    <div className="col-sm-12  col-md-6 col-lg-6 newsInner">
      <div className="card newsCard">
        <img src={props.src} class="card-img-top newsImg" alt="..." />
      </div>
    </div>
  );
}

export default NewsFeatures;
