import "./components.css";

import AvatarImage from "../Images/avatar.png";

// page is the current page
function AvatarComp({ image }) {
  return (
    <div>
      <div className="card">
        <img
          src={image}
          className="card-image"
          alt="An abstract avatar of a male"
        />

        <div className="card-text-container">
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
