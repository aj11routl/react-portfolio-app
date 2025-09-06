import "./Pages.css";

import TrulyNavbarComp from "../Components/TrulyNavbarComp.js";
import NavbarComp from "../Components/NavbarComp.js";
import AvatarComp from "../Components/AvatarComp.js";
import CardComp from "../Components/CardComp.js";

function HomePage() {
  return (
    <div>
      <NavbarComp />
      <div className="content">
        <div className="section">
          <div className="home-banner-container">
            <AvatarComp />
            <div className="home-banner-text-container">
              <h4 className="padding-bottom-5px">A designer who</h4>
              <h2>Judges a book by its cover...</h2>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="flex">
            <div className="text-align-left">
              <h3 className="padding-5px">Beep boop beep boop.|</h3>
              <p>Instance node_modules clean architecture atomic design val.</p>
              <div className="text-container">
                <p>
                  Safari branch interface test double diversity and inclusion.
                  REST cache i naming things shareware api. Build tool Byzantine
                  fault tolerance imagemagick spy native legacy Chrome machine
                  learning tree shaking keycaps. Object library test-driven
                  developer devops dynamic streams Github observer pattern
                  domain.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <CardComp />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
