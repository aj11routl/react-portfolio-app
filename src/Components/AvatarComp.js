import "./components.css";
import "../Pages/Pages.css";

import AvatarImage from "../Images/avatar.png";
import ProfileImage from "../Images/me.jpg";

// page is the current page
function AvatarComp() {
  return (
    <div className="avatar-image-container">
      <img src={ProfileImage} alt="An abstract avatar of a male" />
      <div className="avatar-image-flare-background"></div>
    </div>
  );
}

export default AvatarComp;
