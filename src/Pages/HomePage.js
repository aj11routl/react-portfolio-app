import "./Pages.css";

import TrulyNavbarComp from "../Components/TrulyNavbarComp.js";
import NavbarComp from "../Components/NavbarComp.js";
import AvatarComp from "../Components/AvatarComp.js";
import CardComp from "../Components/CardComp.js";

import Card1Image from "../Images/12os.png";

function HomePage() {
  return (
    <div>
      <NavbarComp />
      <div className="content">
        <div className="section">
          <div className="home-banner-container">
            <AvatarComp />
            <div className="home-banner-text-container">
              <h5 className="padding-bottom-5px">A designer who</h5>
              <h2>Judges a book by its cover...</h2>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="flex">
            <div className="text-align-left">
              <h2 className="padding-5px">Beep boop beep boop.|</h2>
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
          <div className="flare-background-container">
            <div className="flare-background"></div>

            <div className="flex-container">
              <CardComp image={Card1Image} />
              <CardComp image={Card1Image} />
            </div>
            <div className="flex-container">
              <CardComp image={Card1Image} />
              <CardComp image={Card1Image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
