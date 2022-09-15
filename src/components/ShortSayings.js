import React from "react";
import "../styles/ShortSayings.css";

function ShortSayings(props) {
  return (
    <>
      <div className="col-sm-12  col-md-6 col-lg-4 ssOuter">
        <div className="card sscardDiv">
          <img src={props.src} className="card-img-top ssImg" alt="..." />
        </div>
      </div>
    </>
  );
}

export default ShortSayings;
