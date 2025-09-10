import "./components.css";
import "../Pages/Pages.css";

import TextBubbleComp from "./TextBubbleComp";

// page is the current page
function FeaturedProjectComp({
  alignLeft = true,
  projectTitle = "Example Project",
  bubbleText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  thumbnailImage,
}) {
  return (
    <div className="flex-container">
      <div className="featured-project-container">
        <div
          className={
            "project-box" +
            (alignLeft ? " flex-align-left" : " flex-align-right")
          }
        >
          <div>
            <h3>
              <span className="light-purple semibold">Featured Project</span>
            </h3>
            <h2>{projectTitle}</h2>
          </div>
          {/* bubble wrapper allows project-image-box to be 
          absolutely positioned according to the Text Bubble component */}
          <div className="bubble-wrapper">
            <TextBubbleComp text={bubbleText} gradientRight={!alignLeft} />

            <div
              className={
                "project-image-box" +
                (alignLeft ? " left-anchor" : " right-anchor")
              }
            >
              <img
                src={thumbnailImage}
                className="featured-project-thumbnail-image"
              />
            </div>
          </div>

          <div
            className={
              "fill-width " +
              (alignLeft ? "text-align-left" : "text-align-right")
            }
          >
            See more...
          </div>
        </div>
      </div>
      <div className="break-15vh" />
    </div>
  );
}

export default FeaturedProjectComp;
