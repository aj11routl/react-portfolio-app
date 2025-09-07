import "./components.css";
import React from "react";
// page is the current page
function AvatarComp({ image, fadeRight = false }) {
  return (
    <div>
      <div className={"card fade" + (fadeRight ? " right-fade" : " left-fade")}>
        <img
          src={image}
          className="card-image"
          alt="An abstract avatar of a male"
        />

        <div className="card-text-container fade">
          <h5>Year-in-industry</h5>
          <h6>
            Work placement at a software development agency as part of my
            university course.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default AvatarComp;
