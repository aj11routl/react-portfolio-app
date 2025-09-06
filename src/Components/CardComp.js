import "./components.css";

import AvatarImage from "../Images/avatar.png";

// page is the current page
function AvatarComp() {
  return (
    <div className="card">
      <img
        src={AvatarImage}
        className="avatar-image"
        alt="An abstract avatar of a male"
      />
      <div className="card-text-container">
        TExt text <p>text</p>
      </div>
    </div>
  );
}

export default AvatarComp;
