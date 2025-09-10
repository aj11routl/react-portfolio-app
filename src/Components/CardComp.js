import "./components.css";
// if delay === true, the classList should contain "delay". this means that the animation for this will be different
// .fade.in-view-delay instead of .fade.in-view (see Pages.css for fade animations)
function AvatarComp({ image, flareRight = false, delay = true }) {
  return (
    <div>
      <div
        className={
          // if delay true: add "delay" to classList
          // if flareRight true: add "right-flare" to classList - otherwise "left-flare"
          // right/left-flare CSS classes change the direction of the gradient effect on the card background
          "card fade" +
          (delay ? " delay" : "") +
          (flareRight ? " right-flare" : " left-flare")
        }
      >
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
