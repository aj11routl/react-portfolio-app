import "./Pages.css";

import React from "react";

import TrulyNavbarComp from "../Components/TrulyNavbarComp.js";
import NavbarComp from "../Components/NavbarComp.js";
import AvatarComp from "../Components/AvatarComp.js";
import CardComp from "../Components/CardComp.js";

import Card1Image from "../Images/12os.png";
import FooterComp from "../Components/FooterComp.js";

function HomePage() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: [0, 0.1, 1],
      }
    );

    const tags = document.querySelectorAll("h2, p, .card");

    tags.forEach((tag) => {
      observer.observe(tag);
    });
  });
  return (
    <div className="content">
      <NavbarComp />
      <div className="section">
        <div className="home-banner-container">
          <AvatarComp />
          <div className="home-banner-text-container">
            <h5 className="padding-bottom-5px underline">A designer who</h5>
            <h2 className="fade">
              Judges a book by its <span className="purple">cover...</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="default-text-container">
          <h2 className="padding-5px fade">Beep boop beep boop.|</h2>
          <p className="fade">
            Instance node_modules clean architecture atomic design val.
          </p>
          <div className="text-container">
            <p className="fade">
              Safari branch interface test double diversity and inclusion. REST
              cache i naming things shareware api. Build tool Byzantine fault
              tolerance imagemagick spy native legacy Chrome machine learning
              tree shaking keycaps. Object library test-driven developer devops
              dynamic streams Github observer pattern domain.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="default-text-container">
          <h2 className="fade">Work Experience</h2>
        </div>
        <div className="break-15vh"></div>
        <div className="flare-background-container">
          <div className="flare-background"></div>

          <div className="flex-container">
            <CardComp image={Card1Image} fadeRight={true} />
            <CardComp image={Card1Image} fadeRight={false} />
          </div>
          <div className="flex-container">
            <CardComp image={Card1Image} fadeRight={true} />
            <CardComp image={Card1Image} fadeRight={false} />
          </div>
        </div>
      </div>
      <div className="break-15vh" />
      <div className="section">
        <div className="default-text-container">
          <h4>
            <center>
              I'm looking to kickstart a career in tech by joining a team in
              <span className="purple"> software development</span>, or{" "}
              <span className="purple">IT</span>.
            </center>
          </h4>
        </div>
      </div>

      <FooterComp />
    </div>
  );
}

export default HomePage;
