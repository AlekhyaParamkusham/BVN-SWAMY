import React from "react";
import "../styles/ArticleItems.css";

function ArticleItems(props) {
  return (
    <div className="card text-center mx-auto mb-3 cardDiv">
      <div className="row g-0">
        <div className="col-md-4 imgDiv">
          <img
            src={props.img}
            className="img-fluid rounded-start articleImg"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title" style={{ color: "#CD1818" }}>
              <strong>{props.title}</strong>
            </h4>
            {/* <p> {props.sub}</p> */}
            <p className="published">
              <em>{props.date}</em>
            </p>

            <p className="card-text articleText">{props.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleItems;
