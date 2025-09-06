import "./components.css";

import { Link } from "react-router-dom";

// page is the current page
function NavbarComp({ page }) {
  return (
    <div className="navbar">
      <Link to="/Projects">
        <div className="navbar-button">
          <h4>Projects</h4>
        </div>
      </Link>
      <Link to="/">
        <div className="navbar-button">
          <h4>About me</h4>
        </div>
      </Link>
      <div className="navbar-button">
        <h4>Qualifications</h4>
      </div>
    </div>
  );
}

export default NavbarComp;
