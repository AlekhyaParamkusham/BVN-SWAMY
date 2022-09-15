import React from "react";
import coverPic from "../images/Untitled_design-removebg.png";
import "../styles/Banner.css";

function Banner() {
  return (
    <>
      <div className="container banOuter">
        <div className="row">
          <div className="container justify-content-around col-lg-4 banInner">
            <img className="banImg" src={coverPic}></img>
          </div>
          <div className="container justify-content-around col-lg-8 col-md-12 col-sm-12 banText">
            <figure class="banFig">
              <blockquote className="blockquote banBlock">
                <p>Whose woods these are I think I know.</p>
                <p> His house is in the village though;</p>
                <p>He will not see me stopping here</p>
                <p>To watch his woods fill up with snow.</p>
                <br />
                <p>My little horse must think it queer</p>
                <p>To stop without a farmhouse near</p>
                <p>Between the woods and frozen lake</p>
                <p>The darkest evening of the year.</p>
              </blockquote>
            </figure>

            <figure class="banFig">
              <blockquote className="blockquote banBlock">
                <p>He gives his harness bells a shake</p>
                <p>To ask if there is some mistake.</p>
                <p>The only other sound’s the sweep</p>
                <p>Of easy wind and downy flake.</p>
                <br />
                <p>The woods are lovely, dark and deep,</p>
                <p>But I have promises to keep,</p>
                <p>And miles to go before I sleep,</p>
                <p>And miles to go before I sleep.</p>
              </blockquote>
            </figure>
          </div>
          <div className="container col-lg-12 ml-auto">
            <figcaption
              className="blockquote-footer source"
              style={{ marginTop: "20px" }}
            >
              <cite title="Source Title">Poem by Robert Frost</cite>
            </figcaption>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
}

export default Banner;
