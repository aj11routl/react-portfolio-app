import "./Pages.css";

import React from "react";

import NavbarComp from "../Components/NavbarComp.js";
import AvatarComp from "../Components/AvatarComp.js";
import CardComp from "../Components/CardComp.js";

import Card1Image from "../Images/12os.png";
import FooterComp from "../Components/FooterComp.js";
import TextBubbleComp from "../Components/TextBubbleComp.js";
import FeaturedProjectComp from "../Components/FeaturedProjectComp.js";

import dogadoptImage from "../Images/dogadopt-thumbnail.png";
import houseplantImage from "../Images/houseplant-thumbnail.png";
import looseleadsImage from "../Images/looseleads-thumbnail.png";

function HomePage() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("delay")) {
              entry.target.classList.add("in-view-delay");
            } else {
              entry.target.classList.add("in-view");
            }
          } else {
            entry.target.classList.remove("in-view");
            entry.target.classList.remove("in-view-delay");
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: [0, 0.1, 1],
      }
    );

    const tags = document.querySelectorAll("h1, p, .card, h3");

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
            <h1 className="fade">
              Judges a book by its <span className="purple">cover...</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="default-text-container">
          <h1 className="padding-5px fade">Beep boop beep boop.|</h1>
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
      <div className="section break">
        <div className="default-text-container">
          <h1 className="fade">Work Experience</h1>
        </div>
        <div className="break-15vh"></div>
        <div className="flare-background-container">
          <div className="flare-background"></div>

          <div className="flex-container">
            <CardComp image={Card1Image} flareRight={true} delay={false} />
            <CardComp image={Card1Image} flareRight={false} delay={false} />
          </div>
          <div className="flex-container">
            <CardComp image={Card1Image} flareRight={true} delay={true} />
            <CardComp image={Card1Image} flareRight={false} delay={true} />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="default-text-container">
          <center>
            <h3 className="fade">
              I'm looking to kickstart a career in tech by joining a team in
              <span className="purple"> software development</span>, or{" "}
              <span className="purple">IT</span>.
            </h3>
          </center>
        </div>

        <FeaturedProjectComp
          alignLeft={true}
          projectTitle="DogAdopt - REST Website Project"
          thumbnailImage={dogadoptImage}
        />
        <FeaturedProjectComp
          alignLeft={false}
          projectTitle="HousePlant - Arduino Project"
          thumbnailImage={houseplantImage}
        />
        <FeaturedProjectComp
          alignLeft={true}
          projectTitle="Loose Leads - React app"
          thumbnailImage={looseleadsImage}
        />
      </div>

      <FooterComp />
    </div>
  );
}

export default HomePage;
