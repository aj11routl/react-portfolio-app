import "./components.css";

import AvatarImage from "../Images/avatar.png";

// page is the current page
function AvatarComp() {
  return (
    <div className="avatar-image-container">
      <img
        src={AvatarImage}
        className="avatar-image"
        alt="An abstract avatar of a male"
      />
    </div>
  );
}

export default AvatarComp;
